const path = require('path');
const grpc = require('grpc');

const {sayMyName} = require('./say-hi.js');

const ip = grpc.load(path.join(__dirname, '../introduction.proto'));

const server = new grpc.Server();   
server.addService(ip.IntroductionService.service, { sayMyName: (data, cb) => {
    cb(null, { answer: sayMyName(data.request.name)});
}});

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure());
console.log('Server running at http://127.0.0.1:50051');
server.start();