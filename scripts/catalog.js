$(document).ready(function(){

var newImg = $("<img id='featured' src='../images/big.jpg'>");
newImg.css("width", "20%");
$('body').append(newImg);
$("#featured").css("position", "absolute");
$("#featured").css("clip", "rect(0px 800px 800px 0px)");
$("#featured").css("left", "64%");
$("#featured").css("top", "39%");
$("#featured").css("z-index", "200");

$('#images').hover(function(){
  $(this).find(".one:last").fadeToggle();
});

$('#images2').hover(function(){
  $(this).find(".two:last").fadeToggle();
});


});
