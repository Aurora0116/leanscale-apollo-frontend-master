FROM node:18-alpine

COPY package.json yarn.lock ./ 

RUN yarn install


COPY . . 

RUN yarn build 

CMD [ "yarn", "start" ]
