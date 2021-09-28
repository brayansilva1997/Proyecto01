$(document).ready(
    function(){
        //$("body").css("background","yellow");
    }
)
$(function(){
    //$("body").css("background","purple");


    $(".1").click(function(){
        $(".contenedor--productos-1").css("display","flex");
        $(".contenedor--productos-2").css("display","flex");
        $(".contenedor--productos-3").css("display","flex");

    })
    $(".2").click(function(){
        $(".contenedor--productos-1").css("display","flex");
        $(".contenedor--productos-2").css("display","none");
        $(".contenedor--productos-3").css("display","none");
    })

    $(".3").click(function(){
        $(".contenedor--productos-1").css("display","none");
        $(".contenedor--productos-2").css("display","flex");
        $(".contenedor--productos-3").css("display","none");
    })

    $(".4").click(function(){
        $(".contenedor--productos-1").css("display","none");
        $(".contenedor--productos-2").css("display","none");
        $(".contenedor--productos-3").css("display","flex");
    })
})

