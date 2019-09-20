import { GRPCServer } from "../network/grpc-server";
import { ContentService } from "./content-service";

export class Api {

    private server: any;
    private contentService: ContentService;

    constructor() {
        this.server = new GRPCServer({
            port: 5000,
            protoFileName: "x.proto"
        });
        this.contentService = new ContentService();
    }

    run(){
        this.server.registerService("ContentService", {
            getContent: this.handleGetContent.bind(this)
        });
        this.server.listen();
        console.log("API Up!");
    }

    private handleGetContent(data: any, cb: any) {
        const parsedQuery = JSON.parse(data.request.query);
        cb(null, { main: this.contentService.getContent(parsedQuery.name), fullQuery: data.request.query });
    }

    static create() {
        return new Api();
    }

}


