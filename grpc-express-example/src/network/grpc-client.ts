import path from "path";
import grpc from "grpc";

export interface IGRPCClient {
    url: string;
    protoFileName: string;
    serviceName: string;
}
export class GRPCClient {

    private readonly options: IGRPCClient;
    app: any;

    constructor(options: IGRPCClient) {
        this.options = options;
        this.app = this.create();
    }


    private create() {
        // normal path is ../static but i do not want to copy shit around
        const PROTO_PATH = path.join(__dirname, '../../src/static/' + this.options.protoFileName);
        const service = grpc.load(PROTO_PATH)[this.options.serviceName];
        // @ts-ignore
        return new service(this.options.url, grpc.credentials.createInsecure());
    }


}
