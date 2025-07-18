$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('nav a').click(function(e){
    e.preventDefault();
    
    const id = $(this).attr('href');
    const destino = $(id);

    if(destino.length) {
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    }

    if ($(window).width() < 768) {
        $('nav').slideUp();
    }
});

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
             email: {
                required: true,
                email: true
            },
             telefone: {
                required: true
            },
            mensagem:{
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})


