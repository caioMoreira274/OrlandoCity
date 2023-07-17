$(document).ready(function(){
			$('.demo').slick({
				autoplay:false,
				autoplaySpreed:3000,
				accessibility:true,
				adaptiveHeight:false,
				dots:false,
				slidesToShow:4,
				slidesToScroll:3
			});
            
		});
$("#news h2").on("mouseover", function(){
				
    $("#news h2").addClass("efeito");
        
}).on("mouseout", function(){
    
    $("#news h2").removeClass("efeito");

});

$("#logotipo").on("mouseover", function(){
    
    $("#banner h1").addClass("efeito");

}).on("mouseout", function(){

    $("#banner h1").removeClass("efeito");

});

$("#input-search").on("focus", function(){

    $("li.search").addClass("ativo");

}).on("blur", function(){

    $("li.search").removeClass("ativo")

});

$(".thumbnails").owlCarousel({
    autoplay: true,
    loop:true,
    nav:true,
    margin: 10,
    navText: ["Anterior", "Próximo"],
    responsive: {
        0:{
            items: 1
        },
        480:{
            items: 3
        },
        1000: {
            items: 4
        }
    }
});