#!/usr/bin/env bash
set -e
readonly instance=${1:?"The instance must be specified. You can copy the header from your browser's devtools on API requests when visiting huhuu.news."}

curl -H "instance: $instance" 'https://www.huhuu.news/_api/communities-blog-node-api/_api/posts?offset=0&size=500&pinnedFirst=true&excludeContent=false' > posts.json
curl -H "instance: $instance" 'https://www.huhuu.news/_api/communities-blog-node-api/_api/categories?offset=0&size=500&pinnedFirst=true' > categories.json

rm -r output/*

./draftjs_to_markdown.ts

#cp -r output ../huhuu-astro/src/pages/blog

