require("./menu");
require("./events")
const img = require("./imager");

(function ($) {
	$(document).ready(function () {
        new img({
            className: 'img-responsive',
            lazyload: true,
            onResize: true
        });
    });
})(jQuery);
