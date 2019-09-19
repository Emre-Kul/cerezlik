const path = require('path');
const grpc = require('grpc');
const PROTO_PATH = path.join(__dirname, '../introduction.proto');
const ip = grpc.load(PROTO_PATH).IntroductionService;
const client = new ip('localhost:50051',grpc.credentials.createInsecure());

client.sayMyName({ name : "emre" }, (err, resp) => {
    if(err) {
        console.log(err);
    } else {
        console.log(resp);
    }
});


client.sayMyName({ name : "heisenberg" } , (err, resp) => {
    if(err) {
        console.log(err);
    } else {
        console.log(resp);
    }
});
