var server = require("../server/server.js").createServer();

describe('Health Check', function () {

  it("responds with status code 200 and hello world text", function(done) {
    var options = {
      method: "GET",
      url: "/"
    };

    server.inject(options, function(response) {      
      expect(response.statusCode).toBe(200);
      expect(response.result).toBe('hello world');
      done();
    });
  });

});

describe('get Data', function () {

  it("responds with data object", function(done) {
    var options = {
      method: "GET",
      url: "/data/one"
    };

    var data = {
      one: "hello",
      two: "world"
    };

    server.inject(options, function(response) {      
      expect(response.statusCode).toBe(200);
      expect(response.result).toEqual(data);
      done();
    });
  });

  it("responds with 404 - Not Found", function(done) {
    var options = {
      method: "GET",
      url: "/data/three"
    };

    server.inject(options, function(response) {      
      expect(response.statusCode).toBe(404);
      expect(response.result).toBe('Not Found');
      done();
    });
  });

});
