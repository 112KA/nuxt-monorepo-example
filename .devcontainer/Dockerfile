FROM node:18.16.0-alpine

RUN apk update &&\
  apk add bash git &&\
  npm i -g pnpm

USER node
WORKDIR /home/node

# ここでnode_modulesつくらないとroot権限でフォルダがつくられてしまう
RUN mkdir node_modules
RUN mkdir -p projects/a/node_modules
RUN mkdir -p projects/b/node_modules

# RUN pnpm i