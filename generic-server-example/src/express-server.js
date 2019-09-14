const Server = require("./server.js");
const express = require("express");

// i will convert this project to typescript and extend server 
class ExpressServer {
    
    constructor(options = {}) {
        this.app = express();
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

module.exports = ExpressServer;