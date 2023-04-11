# Wix Scraper
Scrape existing posts from the Wix instance
## Usage
`get_instance.sh` gets an instance ID and saves it to instance.txt. Example: `./get_instance.sh` </br>
<!--`do.sh` uses one argument, which defines which Wix instance to use and passes the rest to `do_nonet.sh`. Example: `./do.sh <Wix instance UUID>` </br>-->
`do.sh` downloads the blog data using the instance ID from instance.txt and passes all its arguments to `do_nonet.sh`. Example: `./do.sh` </br>
`do_nonet.sh` optionally uses one argument named `--cp-astro`, which copies the output to `../huhuu-astro/src/pages/blog` and passes the rest to `draftjs_to_markdown.js`. Example: `./do_nonet.sh --cp-astro` </br>
`draftjs_to_markdown.ts` optionally uses one argument, which if defined like the following only matches the specified post slug. Example: `./draftjs_to_markdown.ts --filter-post='1st-editorial-pääkirjoitus` </br>
## Usage examples
```sh
./get_instance.sh
./do.sh --cp-astro --filter-post='violence-in-learning-environments-what-can-we-do'
./do_nonet.sh --cp-astro --filter-post='violence-in-learning-environments-what-can-we-do'
./draftjs_to_markdown.ts --filter-post='violence-in-learning-environments-what-can-we-do'
./do.sh
./do_nonet.sh
./draftjs_to_markdown.ts
```

