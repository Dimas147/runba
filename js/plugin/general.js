//jQuery(document).ready(function(){
//	var num = parseInt($.cookie("visit") || 0) + 1;
//	$.cookie("visit", num); //number of time a user visited the site.
//	if(num == 1){
//		$(document).on('mouseleave', function(e){
//			var cont = $('#went-popup ._content');
//			if ((e.clientY < 0) && (cont.length > 0)) {
//
//				var p = document.getElementById('went-popup');
//				p.classList.add('active');
//				$('.popup-overlay a[href="#!"]').on('click', function(){
//					p.classList.remove('active');
//				});
//				$(document).unbind();
//			}
//		});
//	} else{
//		console.log("You have been here for " + num + " times!");
//	}
//});

//jQuery(document).ready(function(){
//	var num = parseInt($.cookie("visit") || 0) + 1;
//	$.cookie("visit", num); //number of time a user visited the site.
//	if(num == 1){
//		var cont = $('#went-popup ._content');
//		if (cont.length > 0) {
//			setTimeout(function(){
//				var p = document.getElementById('went-popup');
//				p.classList.add('active');
//				$('.popup-overlay a[href="#!"]').on('click', function(){
//					p.classList.remove('active');
//				});
//				$(document).unbind();
//			}, 3000);
//		}
//	} else{
//		console.log("You have been here for " + num + " times!");
//	}
//});

var cont = $('#went-popup ._content');
if (cont.html = "") {
	setTimeout(function(){
		var p = document.getElementById('went-popup');
		p.classList.add('active');
		$('.popup-overlay a[href="#!"]').on('click', function(){
			p.classList.remove('active');
		});
		$(document).unbind();
	}, 2000);
}
