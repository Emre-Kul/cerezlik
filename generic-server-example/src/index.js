const ExpressServer = require("./express-server");
const FastifyServer = require("./fastify-server");

const fastifyServer = new FastifyServer({ port: 3000 });
fastifyServer.create();
fastifyServer.addGetRoute("/", (req, res) => {
    res.send("Hello From Fastify");
});
fastifyServer.app.listen(3001, () => {
    console.log("Fastify Listening!");
});
/*
const expressServer = new ExpressServer({ port: 3000 });
expressServer.create();
expressServer.addGetRoute("/", (req, res) => {
    res.send("Hello From Express!");
});
expressServer.listen( () => {
    console.log("Express Listening!");
});
*/