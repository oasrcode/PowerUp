FROM node:14

WORKDIR /Backend
COPY package.json .
RUN npm install
COPY . .
CMD npm start