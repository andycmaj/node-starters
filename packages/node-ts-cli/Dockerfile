FROM node:lts-alpine

RUN apk --no-cache add \
      bash \
      g++ \
      ca-certificates \
      lz4-dev \
      musl-dev \
      cyrus-sasl-dev \
      openssl-dev \
      make \
      python

RUN apk add --no-cache --virtual \
      .build-deps \
      gcc \
      zlib-dev \
      libc-dev \
      bsd-compat-headers \
      py-setuptools \
      bash \
      yarn

# Create app directory
WORKDIR /usr/local/app
COPY package.json /usr/local/app
RUN yarn
# RUN yarn add node-rdkafka

COPY . /usr/local/app
CMD ["yarn", "start"]