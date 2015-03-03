// Copyright (c) 2012-2014 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
(function () {
	"use strict";

    var fs = require("fs");
	var expect = require("expect.js");
	var server = require("./../../src/server/server.js");
	var httpUtil = require("../util/http_util.js");
	var paths = require("../../build/config/paths.js");

    var jshamcrest = require('../util/jshamcrest_expectjs');
    jshamcrest.Integration.ExpectJs();

    var TEST_FILE = paths.testDir + "/file.txt";
	var TEST_DATA = "Hello Test";

	describe("Server", function() {

		beforeEach(function(done) {
			fs.writeFile(TEST_FILE, TEST_DATA, function(err) {
				server.start(5000, paths.testDir, function() {
					done(err);
				});
			});
		});

		afterEach(function(done) {
			server.stop(function() {
				fs.unlink(TEST_FILE, function(err) {
					done(err);
				});
			});
		});

		it("responds to requests", function(done) {
			httpUtil.getPage("http://localhost:5000/file.txt", function(error, response, responseText) {
				expect(response.statusCode).to.equal(200);
				expect(responseText).to.equal(TEST_DATA);

                assertThat(responseText, is(TEST_DATA));

				done(error);
			});
		});

	});

}());
