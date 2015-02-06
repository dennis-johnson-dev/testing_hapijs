var server = require("../server/server.js").createServer(3000);
var data = require("./fixtures/data.js");

describe("Health Check", function () {

  it("responds with status code 200 and hello world text", function(done) {
    var options = {
      method: "GET",
      url: "/"
    };

    server.inject(options, function(response) {      
      expect(response.statusCode).toBe(200);
      expect(response.result).toBe("hello world");
      done();
    });
  });

});

