FROM node:11-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

# FOR WEB APP
EXPOSE 3000

# FOR GRPC API
EXPOSE 5000

CMD [ "npm", "run", "start" ]
