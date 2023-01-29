#!/usr/bin/env sh
jq 'map(.owner) | [group_by (.)[] | {count: length, name: .[0].name}] | sort_by(.count)' < posts.json
