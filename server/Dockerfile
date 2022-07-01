FROM node:16-alpine

COPY yarn.lock package.json  ./

RUN yarn install

COPY src tsconfig.json tsconfig.build.json nest-cli.json ./

RUN yarn build

WORKDIR /dist/
ENTRYPOINT ["node", "main.js"]