// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global describe, it, expect, example, beforeEach, mocha, nil */
(function() {
	"use strict";

	var example = require("./../../src/client/example.js");
	var constants = require("./../../src/client/constants.js");

	mocha.setup({ignoreLeaks: true});

	describe("Text field validator", function() {

		var field;

		beforeEach(function() {
			field = document.createElement("input");
			field.setAttribute("type", "text");
		});

		it("applies 'required' CSS class when field is empty", function() {
			example.validateTextField(field);

			expect(cssClass()).to.equal(constants.REQUIRED_FIELD_CLASS);
            assertThat(cssClass(), is(constants.REQUIRED_FIELD_CLASS));
		});

		it("removes 'required' CSS class when field is not empty", function() {
			field.setAttribute("class", constants.REQUIRED_FIELD_CLASS);
			field.value = "not empty";

			example.validateTextField(field);

			expect(cssClass()).to.equal(null);
            assertThat(cssClass(), is(nil()));
		});

		// TODO: should preserve existing CSS classes

		function cssClass() {
			return field.getAttribute("class");
		}

	});
}());