#!/usr/bin/env bash
set -e
rm -rf output
mkdir output

if [[ $1 = "--cp-astro" ]]; then
	shift
	cp_astro=true
fi

#jq -r '.[].slug' < posts.json | parallel --joblog /dev/stderr ./draftjs_to_markdown.ts --filter-post={} "$@" \> /dev/null
jq -r '.[].slug' < posts.json | parallel -j'200%' --bar ./draftjs_to_markdown.ts --filter-post={} "$@" \> /dev/null

if [[ $cp_astro = true ]]; then
	rm -rf ../huhuu-astro/src/pages/blog
	cp -r output ../huhuu-astro/src/pages/blog
fi

