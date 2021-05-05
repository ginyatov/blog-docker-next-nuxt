FROM node:14.15-alpine


WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

COPY . .


RUN yarn start:build

EXPOSE 4000
