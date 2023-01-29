#!/usr/bin/env bash
set -e
rm -rf output
mkdir output

# Currently this is 80 seconds and do_nonet.sh is 20 seconds.
echo Don\'t use this script > /dev/stderr
exit 1

if [[ $1 = "--cp-astro" ]]; then
	shift
	cp_astro=true
fi

jq -r '.[].slug' < posts.json | parallel --joblog /dev/stderr ./draftjs_to_markdown.ts --filter-post={} "$@" \> /dev/null

if [[ $cp_astro = true ]]; then
	rm -rf ../huhuu-astro/src/pages/blog
	cp -r output ../huhuu-astro/src/pages/blog
fi

