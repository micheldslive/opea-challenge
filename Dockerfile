FROM node:16-alpine

WORKDIR /opea

COPY . .

RUN yarn
