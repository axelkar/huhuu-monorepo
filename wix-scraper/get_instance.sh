#!/bin/sh
set -eux

# ID is from https://dev.wix.com/api/rest/getting-started/sorting-and-paging
curl https://www.huhuu.news/_api/v2/dynamicmodel | jq '.apps."14bcded7-0066-7c35-14d7-466cb3f09103".instance' -r > instance.txt
