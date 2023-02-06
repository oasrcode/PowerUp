FROM node:14 as build-stage

WORKDIR /Frontend

COPY package.json .
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]