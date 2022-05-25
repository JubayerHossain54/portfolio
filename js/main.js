$(document).ready(function(){
    $('.btn1').click(function(){
        $('.img1,.img2,.img3,.img4').show();
    });
    $('.btn2').click(function(){
        $('.img1,.img2').show();
        $('.img3,.img4').fadeOut();
    });
    $('.btn3').click(function(){
        $('.img1,.img2,.img3').show();
        $('.img4').fadeOut();
    });
    $('.btn4').click(function(){
        $('.img1').show();
        $('.img2,.img3,.img4').fadeOut();
    });
    $(".btn1").hover(function(){
        $(this).css({
            background:"#fff",
            color:"black"

        });
    });
    $(".btn4").focus(function(){
        $(this).css({
            background:"#fff",
            color:"black"

        });
    });
    $(".btn2").click(function(){
        $(this).css({
            background:"#fff",
            color:"black"

        });
    });
    $(".btn3").click(function(){
        $(this).css({
            background:"#fff",
            color:"black"

        });
    });
});