import grpc from "grpc";

export type GRPCServerOptions = {
    port: number;
    hostname: string;
    protoFilePath: string;
    secure?: boolean;
};

export class GRPCServer {

    private readonly options: GRPCServerOptions;
    private instance: any;
    private proto: any;

    constructor(options: GRPCServerOptions) {
        this.options = options;
        this.create();
    }

    listen() {
        this.instance.start();
    }

    registerService(serviceName: string, impl: any) {
        this.instance.addService(this.proto[serviceName].service, impl);
    }

    private create() {
        this.instance = new grpc.Server();
        this.proto = grpc.load(this.options.protoFilePath);
        this.instance.bind(`${this.options.hostname}:${this.options.port}`, grpc.ServerCredentials.createInsecure());
    }
}
