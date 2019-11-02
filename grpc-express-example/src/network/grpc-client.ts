import grpc from "grpc";

export type GRPCClientOptions = {
    serviceName: string;
    protoFilePath: string;
    url: string;
};

export class GRPCClient {

    private readonly options: GRPCClientOptions;
    private app: any;

    constructor(options: GRPCClientOptions) {
        this.options = options;
        this.create();
    }


    private create() {
        const service = grpc.load(this.options.protoFilePath)[this.options.serviceName];
        // @ts-ignore
        this.app = service(this.options.url, grpc.credentials.createInsecure());

    }

    fetch(serviceMethodName: string, payload: any) {
        return new Promise( (resolve, reject) => {
            this.app[serviceMethodName](payload, (err: any, res: any) => {
                if(err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }

}
