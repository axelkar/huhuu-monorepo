#!/usr/bin/env bash
set -e
rm -rf output
mkdir output

if [[ $1 = "--cp-astro" ]]; then
	shift
	cp_astro=true
fi

./draftjs_to_markdown.ts "$@"

if [[ $cp_astro = true ]]; then
	rm -rf ../huhuu-astro/src/pages/blog
	cp -r output ../huhuu-astro/src/pages/blog
fi

