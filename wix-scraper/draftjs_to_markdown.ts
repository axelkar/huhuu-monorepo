#!/usr/bin/env -S deno run --allow-env=NODE_CLUSTER_SCHED_POLICY,NODE_UNIQUE_ID,NODE_ENV --allow-write=output --allow-read=worker.js --allow-net=deno.land

import draftToMarkdown_ from 'npm:draftjs-to-markdown';
const draftToMarkdown = draftToMarkdown_.default;
// @deno-types="npm:@types/lodash"
import _ from "npm:lodash";

import POSTS from "./posts.json" assert { type: "json" };

function frontMatterGenerator(object, pairs, extra) {
	let frontMatter = '---\n';
	for (let [key, ogKey] of pairs) {
		frontMatter += key + ': ' + JSON.stringify(object[ogKey]) + '\n';
	}
	frontMatter += extra;
	frontMatter += '---';
	return frontMatter;
}

console.log();
let count = 0;
await Promise.all(POSTS.map(async post => {
	for (let block of post.content.blocks) {
		if (!(_.isEqual(block.data, {dynamicStyles: {"line-height": "1.38"}}) || _.isEqual(block.data, {}) || typeof block.data === 'undefined')) {
			// TODO: do something to dynamic styles
			console.warn(block.data, "not default value in", post.slug);
		}
		delete block.data.dynamicStyles;
	}
	// Remove whitespace and NBSP before ending bold
	let contentMarkdown = draftToMarkdown(
		post.content, 
		{
			trigger: '#',
			separator: ' ',
		},
		function customEntityTransform(entity, text) {
			if (entity.type === "wix-draft-plugin-image") {
				// TODO: combine text under to make a figure and alt text
				let comment = (entity.data.src.file_name === entity.data.src.original_file_name) ? '' : ` <!-- Original name: ${entity.data.src.original_file_name} -->`;
				return `![Unknown image description. Check context for details.](https://static.wixstatic.com/media/${entity.data.src.file_name})${comment}`
			} else if (entity.type === "wix-draft-plugin-divider") {
				return '---'
			} else if (entity.type === "wix-draft-plugin-video" && entity.data.type === "single") {
				// TODO: Embed video
				return `<br/>${entity.data.src}<br/>`
			} else if (entity.type === "wix-draft-plugin-html" && entity.data.srcType === "html") {
				return entity.data.src;
			} else if (entity.type === "ANCHOR") {
				return `<a name="${entity.data.anchor}"></a>`
			}
			// TODO: wix-draft-plugin-gallery
		}
	).replace(/[\s\u00A0]\*\*\n/g, '**\n');
	let frontMatter = frontMatterGenerator(post, [
		["title", "title"],
		["wixCategoryIds", "categoryIds"],
		["slug", "slug"],
		["isPinned", "isPinned"],
		["isFeatured", "isFeatured"],
		["timeToRead", "timeToRead"],
		["wixViewCount", "viewCount"],
		["created", "createdDate"],
		["published", "firstPublishedDate"],
		["modified", "lastActivityDate"], // ?? are comments and likes included?
		["language", "language"],
	], 'layout: "../../layouts/BlogPost.astro"\n');
	await Deno.writeTextFile("./output/" + post.slug + ".md", frontMatter + '\n' + contentMarkdown);
	count++;
	console.log('\r' + count + '/' + POSTS.length);
	if (count === POSTS.length) console.log("done");
}));
