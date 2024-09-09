#!/usr/bin/env bash
export AWS_PROFILE=personal-profile
s3_bucket="s3://guia-remake.com"

aws s3 ls
npm run-script build
aws s3 sync dist $s3_bucket --exclude "index.html"
aws s3 cp dist/index.html $s3_bucket/index.html --acl public-read --cache-control public,must-revalidate,proxy-revalidate,max-age=0
aws s3 cp dist/sw.js $s3_bucket/sw.js --acl public-read --cache-control public,must-revalidate,proxy-revalidate,max-age=0 --content-type "text/javascript"
aws s3 cp dist/manifest.webmanifest $s3_bucket/manifest.webmanifest --acl public-read --cache-control public,must-revalidate,proxy-revalidate,max-age=0
