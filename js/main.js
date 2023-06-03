// Preloader JS
window.onload = function () {
	var preloader = document.getElementById("loading");
  	preloader.style.display = "none";
}


// Back to Top Button JS
var btn = $("#button");

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass("show");
	} else {
		btn.removeClass("show");
	}
});

btn.on("click", function (e) {
	e.preventDefault();
	$("html, body").animate(
	  	{
	    	scrollTop: 0,
	  	},
	  	"300"
	);
});


// Nav Links JS 
$(document).ready(function () {
	var navMain = $(".navbar-collapse");
	navMain.on("click", "a", null, function () {
		navMain.removeClass('show');
	});
});