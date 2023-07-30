FROM node:lts-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:lts-alpine as production-stage

WORKDIR /app

COPY --from=build-stage /app .

RUN npm install express axios

EXPOSE 3000

CMD ["node", "server.js"]
