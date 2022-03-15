#FROM public.ecr.aws/docker/library/node:latest
FROM node:latest
RUN mkdir -p /app/public

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY app.js /app/

COPY public/ /app/public/

EXPOSE 80

CMD [ "npm", "start" ]