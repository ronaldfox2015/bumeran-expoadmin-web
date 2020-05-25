#!/bin/bash

SRC_DIR=$(pwd)

echo "SRC_DIR: "$SRC_DIR
rm -rf $SRC_DIR/dist
rm -rf $SRC_DIR/node_modules

aws --region eu-west-1 ecr get-login --no-include-email | sh
docker pull 929226109038.dkr.ecr.eu-west-1.amazonaws.com/aptitus-dev-expoferia-admin:20190206.97
docker run --rm -e DEV_UID=$(id -u) -e DEV_GID=$(id -g) -v $SRC_DIR/:/app/ 929226109038.dkr.ecr.eu-west-1.amazonaws.com/aptitus-dev-expoferia-admin:20190206.97 $@
