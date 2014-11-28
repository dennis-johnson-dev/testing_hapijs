var Hapi = require('hapi');

function createServer(port) {
  var server = new Hapi.Server(port);

  server.route({
    path: "/",
    method: "GET",
    handler: function(request, reply) {
      reply('hello world from port: ' + port);
    }
  });

  return server;
}

module.exports = {
  createServer: createServer
};
