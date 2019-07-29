
// スムーズスクロール
$(function() {
	$('a[href^="#"]' + 'a:not([href *= "tab01"])' + 'a:not([href *= "tab02"])').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});

});

// pop
$(function(){
	$("#exitPop").hover(
		function () {
		    var sc = $(window).scrollTop();
			var sc2 = sc + 20;

			$('#pop').css({
				'top': sc2
			});
			$("#pop").addClass("active");
			$("#overlay").addClass("active");
		}
	);
	$('.close').click(function () {
		$("#pop").removeClass("active");
		$("#overlay").removeClass("active");
	})	
});



/*fadeinのjs*/

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});

/*fadeinjs*/