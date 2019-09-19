import { ExpressServer } from "../network/express-server";
import { GRPCClient } from "../network/grpc-client";

export class WebApp {

    private server: any;
    private client: any;

    constructor() {
        this.server = new ExpressServer();
        this.client = new GRPCClient({
            serviceName: "ContentService",
            protoFileName: "x.proto",
            url: "localhost:5000"
        });
    }

    run() {
        this.server.listen(() => { console.log("App Started!")});
        this.server.get("/", this.handleContent.bind(this));
    }

    handleContent(req: any, res: any) {
        this.client.app.getContent({query: JSON.stringify(req.query)}, (err: any, resp: any) => {
            if (err) {
                console.log(err);
                res.send("Error Happened!");
            } else {
                console.log("Request Processed!");
                res.send(resp);
            }
        })
    }

    static create() {
        return new WebApp();
    }
}
