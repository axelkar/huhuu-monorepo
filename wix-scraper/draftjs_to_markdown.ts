#!/usr/bin/env -S deno run --allow-env=NODE_CLUSTER_SCHED_POLICY,NODE_UNIQUE_ID,NODE_ENV --allow-write=output --allow-read=../../draftjs-to-markdown-huhuu --allow-net=deno.land

console.log('Don\'t "deno check" this file. Importing JSON files with types is likely broken');

// import draftToMarkdown_ from 'npm:draftjs-to-markdown';
// import draftToMarkdown_ from 'npm:draftjs-to-markdown-v2';
// const draftToMarkdown = draftToMarkdown_.default;

/*import { createRequire } from "https://deno.land/std@0.173.0/node/module.ts";
const require = createRequire(import.meta.url + '/../../draftjs-to-markdown-huhuu');
const draftToMarkdown = require('./lib/draftjs-to-markdown-v2.js');*/

// import draftToMarkdown from '../../draftjs-to-markdown-huhuu/lib/draftjs-to-markdown-v2.js';
import draftToMarkdown from '../../draftjs-to-markdown-huhuu/js/index.ts';
import type { EditorContent } from '../../draftjs-to-markdown-huhuu/js/index.ts';
// TODO: fetch from GitHub

// @deno-types="npm:@types/lodash"
import _ from "npm:lodash";

import _POSTS from "./posts.json" assert { type: "json" };
const POSTS: WixPost[] = _POSTS;

interface WixImgSrc {
	original_file_name: string | null;
	file_name: string;
	width: number | null;
	height: number | null;
};

interface WixPostDates {
	createdDate: string;
	lastPublishedDate: string;
	lastActivityDate: string;
	firstPublishedDate: string;
}

interface WixResourceOwner {
	// Might/might not be accurate
	name: string;
	image: string | WixImgSrc | null;
	cover: WixImgSrc | unknown | null;
	siteMemberId: string;
	isOwner: boolean; // not important
	isBlocked: boolean; // not important
	appStore: unknown;
	privacyStatus: "UNKNOWN" | string;
	title: unknown | null;
	slug?: string;
	[x: string]: unknown;
}

type WixPost = WixPostDates & {
	_id: string;
	id: string;
	instanceId: string;
	status: 'published' | string;
	categoryIds: string[];
	slugs: string[];
	slug: string;
	isPinned: boolean;
	timeToRead: number;
	viewCount: number;
	isFeatured: boolean;
	heroImage: {
		// TODO: output this
		src: WixImgSrc | unknown | null;
		isCustom: boolean;
		isEnabled: boolean;
		[x: string]: unknown;
	};
	tagIds: string[];
	relatedPostIds: string[];
	title: string;
	language: string;
	content: EditorContent;
	isDemo: boolean;
	coverImage: {
		// TODO: output this
		shouldRender: boolean;
		isCustom: boolean;
		isEnabled: boolean;
		imageMetadata: WixImgSrc | unknown | null;
		videoMetadata: unknown | null; 
		src: WixImgSrc | null;
		isResolved: boolean;
		[x: string]: unknown;
	};
	owner: WixResourceOwner;
	[x: string]: unknown;
};

console.info("Done loading posts.json");

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
	if (Deno.args[0] && Deno.args[0].startsWith("--filter-post=") && post.slug !== Deno.args[0].slice("--filter-post=".length)) return
	for (let block of post.content.blocks) {
		if (!_.isEmpty(block.data) && !_.isEmpty(block.data.dynamicStyles)) {
			if (!_.isArray(block.inlineStyleRanges)) block.inlineStyleRanges = [];
			block.inlineStyleRanges.push({
				offset: 0,
				length: 8192,
				style: JSON.stringify(block.data.dynamicStyles)
			});
		}
		if (!_.isEmpty(block.data)) delete block.data.dynamicStyles;
	}

	// TODO: replace {, }, -, < and > with the respective HTML entities
	// Remove whitespace and NBSP before ending bold
	//
	// RawCSS is turned on but Wix CSS-like inline styles don't work properly:
	// jq 'map(.content.blocks | map([.inlineStyleRanges[] | select(.style | startswith("{"))])) | flatten | map(.style)' < posts.json
	let contentMarkdown = draftToMarkdown(
		post.content, 
		{},
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
		},
		{

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
		["published", "lastPublishedDate"],
		["modified", "lastActivityDate"], // ?? are comments and likes included?
		["language", "language"],
	], 'layout: "../../layouts/BlogPost.astro"\n');
	await Deno.writeTextFile("./output/" + post.slug + ".md", frontMatter + '\n' + contentMarkdown);
	count++;
	console.log('\r' + count + '/' + POSTS.length);
	if (count === POSTS.length) console.log("done");
}));
