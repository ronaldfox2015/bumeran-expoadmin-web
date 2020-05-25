#!/bin/bash

cp package.json docker/
cp yarn.lock docker/
aws --region eu-west-1 ecr get-login --no-include-email | sh
docker-compose -f docker-compose.build.yml build
