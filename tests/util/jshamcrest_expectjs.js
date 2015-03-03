/**
 * Created by fernando on 15-02-26.
 */

(function() {
    "use strict";

    var jshamcrest = require('jshamcrest').JsHamcrest;
    var expect = require("expect.js");

    jshamcrest.Integration.ExpectJs = function() {
        jshamcrest.Integration.copyMembers(global);
        global.assertThat = function (actualValue, matcherOrValue, message) {
            jshamcrest.Operators.assert(actualValue, matcherOrValue, {
                message: message,
                fail: function (msg) {
                    expect().fail(msg);
                },
                pass: function (msg) {
                    expect(true).ok();
                }
            });
        };
    };

    module.exports = jshamcrest;

}());