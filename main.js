$(document).ready(function(){
    
    $('#ir-para-sobre-a-loja').click(function() {
        const destino = $('#sobre-a-loja');

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('#ir-para-produtos').click(function() {
        const destino2 = $('#produtos');

        $('html').animate({
            scrollTop: destino2.offset().top
        }),1000
    })
})