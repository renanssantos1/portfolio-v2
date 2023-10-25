FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 24678

RUN ["npm", "run", "build"]

ENV PATH ./node_modules/.bin/:$PATH


FROM nginx
COPY --from=builder /src/.output /src/.output