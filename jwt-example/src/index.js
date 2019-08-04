const fastify = require("fastify")();
const { register } = require("./routes");

fastify.register(require("fastify-formbody"));
fastify.register(require('fastify-cookie'));

register(fastify);

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});


