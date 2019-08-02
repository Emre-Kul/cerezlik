const fastify = require('fastify')();

fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' });
});

fastify.listen(3000, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});


