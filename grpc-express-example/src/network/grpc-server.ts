import grpc from "grpc";
import path from "path";

export interface IGRPCOptions {
    port: number;
    protoFileName: string;
}

export class GRPCServer {

    private readonly options: IGRPCOptions;
    private instance: any;
    private proto: any;

    constructor(options: IGRPCOptions) {
        this.options = options;

        this.instance = this.create();
        this.proto = this.loadProtoFile();
    }

    listen() {
        this.instance.start();
    }

    registerService(serviceName: any, impl: any) {
        this.instance.addService(this.proto[serviceName].service, impl);
    }

    private loadProtoFile() {
        return grpc.load(path.join(__dirname, '../../src/static/' + this.options.protoFileName));
    }

    private create() {
        const server = new grpc.Server();
        server.bind(`127.0.0.1:${this.options.port}`, grpc.ServerCredentials.createInsecure());
        return server;
    }
}
