var Lab = require('lab');
var lab = exports.lab = Lab.script();
var chai = require('chai');

var describe = lab.describe;
var it = lab.it;
var expect = chai.expect;

describe('Health Check', function () {
var server;

  it("responds with status code 200 on GET of root path", function(done) {
    var port = 8855;

    server = require("../server/server.js").createServer(port);
    var options = {
      method: "GET",
      url: "/"
    };

    server.inject(options, function(response) {
      expect(response.statusCode).to.equal(200);
      expect(response.result).to.equal('hello world from port: ' + port);
      done();
    });
  });
});
