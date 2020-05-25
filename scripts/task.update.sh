#!/bin/bash

SRC_DIR=$(pwd)

echo "Actualizando Imagen Docker"
rm -rf $SRC_DIR/node_modules

aws --region eu-west-1 ecr get-login --no-include-email | sh
docker pull 929226109038.dkr.ecr.eu-west-1.amazonaws.com/aptitus-dev-expoferia-admin:20190206.97
docker-compose up
