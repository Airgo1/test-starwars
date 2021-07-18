function Open() {
	document.getElementById("myDropdown").classList.toggle("show");
	var open = document.getElementsByClassName("menu-open")[0];
	var close = document.getElementsByClassName("menu-close")[0];
	var logo = document.getElementById("logo");
	open.style.display = 'none';
	logo.style.display = 'none';
	close.style.display = 'block';
}

function Close() {
	document.getElementById("myDropdown").classList.toggle("show");
	var open = document.getElementsByClassName("menu-open")[0];
	var close = document.getElementsByClassName("menu-close")[0];
	var logo = document.getElementById("logo");
	open.style.display = 'block';
	logo.style.display = 'block';
	close.style.display = 'none';
}

$( document ).ready(function() {

	function Publicity() {
		var article1 = document.getElementById("article1");
		var image = document.getElementById("img-article1");

		var window_pos = window.pageYOffset + window.innerHeight/2;
		var image_pos = window.pageYOffset + image.offsetHeight/2;
		var image_wight = image.offsetHeight
		var publicity_height = article1.offsetHeight;
		var top_image = article1.offsetTop + publicity_height*0.05;
		var bottom_image = top_image + publicity_height;

		if (window_pos < top_image) 
			image.style.bottom = '-'+ (image_wight) + 'px';
		else if (window_pos < bottom_image - image_wight) 
			image.style.bottom = '-'+ (image_pos) + 'px';
		else {
			image.style.bottom = '-'+ (publicity_height) + 'px';
		}
			
	}

	function Parallax(id) {
		console.log("paralax");
		var el = document.getElementById(id);

		var window_pos = window.pageYOffset;
		var el_top = el.offsetTop;
		var el_height = el.offsetHeight;
		var el_bottom = el_top+el_height;
		var pos_el_string = el.style.backgroundPositionY;
		var pos_el_int = parseInt(pos_el_string.slice(2,pos_el_string.length-2));
		var move_backgroung = /*pos_el_int +*/ ((window_pos-el_top)*el.dataset.speed);
		
		console.log(pos_el_string)
		console.log(pos_el_int)

		if(window_pos > el_top && window_pos < el_bottom) {
			console.log(id + " : " + move_backgroung + " : " + el_height);
			el.style.backgroundPositionY = '-' + (move_backgroung) + 'px';
		}
	}
	
	Publicity()

	window.addEventListener("scroll", Publicity);
	window.addEventListener("scroll", function(){
		Parallax("header");
	});
	window.addEventListener("scroll", function(){
		Parallax("logo");
	});
	window.addEventListener("scroll", function(){
		Parallax("kiloren");
	});

});


