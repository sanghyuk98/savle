$(function(){
	$(".notice_inner> ul> li> div").click(function(){
		$(this).next().slideToggle();
	});
});
$(function(){
	$(".notice_inner> ul> li> div").click(function(){
		$(this).children(".plus").toggleClass("turn");
	});
});





