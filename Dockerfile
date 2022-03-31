FROM public.ecr.aws/docker/library/node:latest

RUN mkdir /app/

WORKDIR /app/

COPY ./ /app/

RUN npm install --only=prod

EXPOSE 80

CMD [ "npm", "start" ]