$(document).on("scroll", function () {
	if ($(document).scrollTop() > 20) {
		$("header").removeClass("largeMenu").addClass("smallMenu");
	} else {
		$("header").removeClass("smallMenu").addClass("largeMenu");
	}
});