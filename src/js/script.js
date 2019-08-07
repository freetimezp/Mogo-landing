$(document).ready(function() {
	
	var introH = $("#intro").innerHeight();
	var header = $("#header");
	var scrollOffset = $(window).scrollTop();



	checkScroll(scrollOffset);

	/*******Проверяем величину элемента скроллОффсет ********/

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);

	});

/********Появление меню после скрола первого экрана***********/

	function checkScroll(scrollOffset) {

		if(scrollOffset >= introH) {
			header.addClass("header-fixed");
		} else {
			header.removeClass("header-fixed");
		}

	};

	/*********Плавное меню**********/

	$(document).ready(function() {
		
		$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this);
		var blockId = $this.data('scroll');
		var blockOffset = $(blockId).offset().top;

  // console.log(blockId);
		// console.log(blockOffset);

		$("nav a").removeClass("active");
		$this.addClass("active");
		
		$("html, body").animate({

			scrollTop: blockOffset

			}, 2000);

		});

 });

/********Бургер меню***********/
	
	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();

		$("#nav-toggle").toggleClass("active");
		$("#nav").toggleClass("active");
		$("#header").toggleClass("active");
	});

/********Аккордион к блоку коллапс***********/

	$("[data-collapse]").on("click", function() {
		event.preventDefault();

		var $this = $(this);
		var collapseId = $this.data('collapse');

		$this.toggleClass("active");
		 
	});

/********Слик слайдер к ревьюс***********/

	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});


});


