FROM node:6.11.0-slim
ENV VERSION 1.0

ENV APP_DIR=/app
ENV SRC_VENDOR=/vendor

ENV DOCKER_USER="dockerdev"
RUN yarn add global gulp && \
    yarn add global @angular/cli@1.2.6 && \
    useradd -u 1234 -d $APP_DIR $DOCKER_USER  && \
    mkdir -p $SRC_VENDOR

COPY package.json $SRC_VENDOR/package.json
COPY yarn.lock $SRC_VENDOR/yarn.lock

RUN cd $SRC_VENDOR && \
    yarn install && \
    chown $DOCKER_USER:$DOCKER_USER -R /vendor && \
    chmod 775 -R /vendor

EXPOSE 4200

WORKDIR $APP_DIR
VOLUME $APP_DIR

ADD entrypoint.sh /root/entrypoint.sh
RUN chmod +x /root/entrypoint.sh
ENTRYPOINT ["/root/entrypoint.sh"]
