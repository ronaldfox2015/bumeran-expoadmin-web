#!/bin/sh

export DOCKER_USER="dockerdev"
export ORIGPASSWD=$(cat /etc/passwd | grep $DOCKER_USER)
export ORIG_UID=$(echo $ORIGPASSWD | cut -f3 -d:)
export ORIG_GID=$(echo $ORIGPASSWD | cut -f4 -d:)

export DEV_UID=${DEV_UID:=$ORIG_UID}
export DEV_GID=${DEV_GID:=$ORIG_GID}

sed -i -e "s/:$ORIG_UID:$ORIG_GID:/:$DEV_UID:$DEV_GID:/" /etc/passwd
sed -i -e "s/$DOCKER_USER:x:$ORIG_GID:/$DOCKER_USER:x:$DEV_GID:/" /etc/group

su - "$DOCKER_USER" -c "[ -d /app/node_modules ] || cp -rf /vendor/node_modules /app/node_modules && $*"
