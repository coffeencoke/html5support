/*
* http://github.com/amiel/html5support
* Amiel Martin
* 2010-01-26
*
* Support certain HTML 5 attributes with javascript, but only if the browser doesn't already support them.
*/

var HTML5Support = (function($){
    var // private members
        // this will become our HTML5Support object
        h5 = {};

    // public functions
    $.extend(h5, {
        supports_attribute: function(attribute, type) { // should we memoize this?
            return attribute in document.createElement(type || 'input');
        }
    });

    // jquery plugins

    $.fn.autofocus = function() {
        if (h5.supports_attribute('autofocus')) return this;
        return this.focus();
    };

    return h5;
})(jQuery);
