const Server = require("./server.js");
const fastify = require("fastify");

// i will convert this project to typescript and extend server 
class FastifyServer {
    
    constructor(options = {}) {
        this.app = fastify();
        this.server = new Server(this.app, options);
    }
    
    create() {
        this.server.create();
    }

    listen(cb) {
        this.server.listen(cb);
    }

    addGetRoute(path, cb) {
        this.app.get(path, cb);
    }
}

module.exports = FastifyServer;