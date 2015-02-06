var Hapi = require('hapi');

var data = {
  one: "hello",
  two: "world"
};

function createServer(port) {
  var server = new Hapi.Server(port);

  var healthCheck = {
    path: "/",
    method: "GET",
    handler: function(request, reply) {
      reply('hello world');
    }
  };

  var getData = {
    path: "/data/{name}",
    method: "GET",
    handler: function(request, reply) {
      var isValidKey = typeof data[request.params.name] !== "undefined";
      if (isValidKey) {
        reply(data);
      } else {
        reply('Not Found').code(404);
      }
    }
  };

  server.route([
    healthCheck,
    getData
  ]);

  return server;
}

module.exports = {
  createServer: createServer
};
