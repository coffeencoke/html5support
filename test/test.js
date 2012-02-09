$(document).ready(function() {

	
	if ($.browser.webkit) {
		module("Webkit");
		test("should support the fancy attributes", function() {
			equal(HTML5Support.supports_attribute('placeholder'), true, "should support placeholder attribute");
			equal(HTML5Support.supports_attribute('autofocus'), true, "should support autofocus attribute");
		});
	} else {
		module("Non-webkit browsers");
		test("should not support fancy attributes", function() {
			equal(HTML5Support.supports_attribute('placeholder'), false, "should not support placeholder attribute");
			equal(HTML5Support.supports_attribute('autofocus'), false, "should not support autofocus attribute");
		});
	}
	
	module("autofocus attribute");
	if (HTML5Support.supports_attribute('autofocus')) {
		test("with autofocus support", function() {
			var input = $('#autofocus_test'),
				input_has_been_focused = false;
			
			input.focus(function() {
				input_has_been_focused = true;
			});
			
			input.autofocus();
			ok(!input_has_been_focused, 'input should not have been focused on call to autofocus');
		});
	} else {
		test("without placeholder support", function() {
			var input = $('#autofocus_test'),
				input_has_been_focused = false;
			
			input.focus(function() {
				input_has_been_focused = true;
			});
			
			input.autofocus();
			ok(input_has_been_focused, 'input should have been focused on call to autofocus');
		});
	}

});
