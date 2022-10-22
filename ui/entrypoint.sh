#!/bin/sh

ROOT_DIR=/usr/share/nginx/html
echo ${VUE_APP_ROUND_ROBIN_URL}
echo $VUE_APP_ROUND_ROBIN_URL

# Replace env vars in files served by NGINX
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html;
do
  sed -i 's|VUE_APP_ROUND_ROBIN_URL_PLACEHOLDER|'${VUE_APP_ROUND_ROBIN_URL}'|g' $file
  # Your other variables here...
done
# Starting NGINX
nginx -g 'daemon off;'