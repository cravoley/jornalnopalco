$(document).on("scroll", function () {
	if ($(document).scrollTop() > 20) {
		$("body").removeClass("largeMenu").addClass("smallMenu");
	} else {
		$("body").removeClass("smallMenu").addClass("largeMenu");
	}
});
