FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

COPY . /usr/src/app:
