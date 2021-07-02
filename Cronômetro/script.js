
$(function(){

    let hh = 0;
    let mm = 0;
    let ss = 0;

    let cronometro;
    let tempo = 1000;//milésimos
    let timer;
    //marcar se o start foi clickado
    let click = false;
    //marcar a posição do tempo anterior
    let posicao = 0;

    //start
    $('#btn1').on('click', function(){
        click = true;
        timer = "00:00:00";

        cronometro = setInterval(function(){

            ss++;

            if(ss == 60){
                ss = 0;
                mm++;  
            }

            if(mm == 60){
                mm = 0;
                hh++;
            }

            if(hh == 24){
                hh = 0;
            }

            //verificando a sintaxe do timer
            timer = (hh < 10 ? '0' + hh : hh) + 
            ":" + (mm < 10 ? '0' + mm : mm) + 
            ":" + (ss < 10 ? '0' + ss : ss);

            //aplicando o timer no documento
            $('#time').text(timer);
        }, tempo);

    });

    //pause
    $('#btn2').on('click', function(){
        clearInterval(cronometro);
    });

    //stop
    $('#btn3').on('click', function(){
        
        if(click == false){
            return alert('O cronômetro ainda não foi iniciado!');
        }

        click = false;

        $('#reset-btn').css('display', 'block');

        position();

        clearInterval(cronometro);

        hh = 0;
        mm = 0;
        ss = 0;

        //voltando o timer para o começo
        $('#time').text("00:00:00");
        
    });

    //reset
    $('#reset-btn').on('click', function(){
        $('li').remove();
        $('#reset-btn').css('display', 'none');
        posicao = 0;
    });

    //posição
    function position(){
        posicao++;

        //salvar o resultado anterior
        $('#ptimer-list').append('<li>' + posicao + '° - ' + timer + '</li>');
       
    }
});