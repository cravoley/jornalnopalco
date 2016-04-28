$(document).on("scroll", function () {
	if ($(document).scrollTop() > 100) {
		$("header").removeClass("largeMenu").addClass("smallMenu");
	} else {
		$("header").removeClass("smallMenu").addClass("largeMenu");
	}
});