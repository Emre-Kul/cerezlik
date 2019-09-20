const express = require("express");

export interface IExpressServerOptions {
    port: number;
}

export class ExpressServer {

    private options: IExpressServerOptions;
    private app: any;

    constructor(options: IExpressServerOptions) {
        this.app = express();
        this.options = options;
    }

    listen(cb: any) {
        this.app.listen(this.options.port, cb);
    }

    get(path: string, cb: any) {
        this.app.get(path, cb);
    }
}
