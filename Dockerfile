#1. Base Image

#2. Working Dir

#3. Bring all files

#4. Run installer

#5. Defaults CMD

FROM node:alpine

WORKDIR /usr/nodeapp

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]


