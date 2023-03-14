FROM node:16.11

RUN npm install pnpm -g

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY pnpm-lock.yaml /usr/src/app/pnpm-lock.yaml

RUN cd /usr/src/app

RUN pnpm install

COPY . /usr/src/app

EXPOSE 3000

CMD node app.js