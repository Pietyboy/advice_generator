var input = null;

function valid_checker(input){
    const emailValid = new RegExp('^.+@.+\..+$');
    return emailValid.test(input.trim());
}

function error_checker(){

    const input_style = document.querySelector('#input_window').style;
    const input = document.querySelector('#input_window').value;

    

    if (valid_checker(document.querySelector('#input_window').value)){
        const sign_up = document.querySelector('#sign_up');
        const success = document.querySelector('#success');
        document.getElementById('conf_email').innerHTML = input.trim();
        if(window.innerWidth < '1000'){
            sign_up.hidden = true;
            success.hidden = false;
        } else{
            sign_up.style.display = 'none';
            success.style.display = 'block';
        }
        
    } else {
        document.querySelector('#email_req').hidden = false;
        input_style.backgroundColor = '#ff605560';
        input_style.borderColor = '#FF6155';
        document.getElementById('input_window').style.color = '#FF6155';
    }
}