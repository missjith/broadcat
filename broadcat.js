// client side code
// just include this js file in your html and enjoy the cats, man ;)
function catContainerPosition(){
	$("#catContainer").attr('style',
		"background:#FFF;position:absolute;left:0px;bottom:0px;overflow:hidden;height:330px;width:306px;text-align:center;border:1px black solid;padding:6px;"
	);
	$("#catContainer label").attr('style',
		"color:#000;font-size:30px;font-family:'Helvetica Neue',Helvetica,Arial;font-weight:100;"
	);
}
$("body").append("<div id='catContainer'><label>BroadCat</label><img /></div><script type='text/javascript' src='https://api.instagram.com/v1/tags/meow/media/recent?client_id=96f9bfe647514976ba6cea29b9cb33f2&callback=parseResponse'></script>");
$(document).ready(catContainerPosition());
$(window).resize(catContainerPosition());
$(window).scroll(catContainerPosition());
var count = 0;
var CATS;
var ready = false;
function parseResponse( msg ) {
  CATS = msg;
  ready = true;
};
setInterval(function(){
	if(ready){
		$("#catContainer img").attr("src",CATS.data[count].images.standard_resolution.url);
		count = (count+1)%CATS.data.length;
	}
},2000);S.data.length;
	}
},2000);