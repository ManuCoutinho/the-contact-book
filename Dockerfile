FROM node:lts-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /home/node/app

COPY package*.json ./
COPY .env ./
COPY . .

RUN npm install

EXPOSE 3333

CMD [ "npm", "start" ]

