const https = require("https");
const http = require("http");
const http2 = require("http2");

class Server {
    
  constructor(handler, options) {
    this.options = options || {};
    this.handler = handler;

    this.instance = this.create();
  }

  listen(cb) {
    if (!this.options.hostname) {
      this.instance.listen(this.options.port || 8000, cb);
    } else {
      this.instance.listen(this.options.port || 8000, this.options.hostname, cb);
    }
  }

  create() {
    if (this.options.https) {
      const httpsSettings = {
        key: this.options.https.key,
        cert: this.options.https.cert,
      };
      if (this.options.http2) {
        return http2.createSecureServer({
          ...httpsSettings,
          allowHTTP1: typeof this.options.https.allowHTTP1 === "boolean" ? this.options.https.allowHTTP1 : true
        }, this.handler);
      } else {
        return https.createServer(httpsSettings, this.handler)
      }
    } else if (this.options.http2) {
      return http2.createServer(this.handler)
    } else {
      return http.createServer(this.handler)
    }
  }
}

module.exports = Server;