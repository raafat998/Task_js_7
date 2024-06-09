function checkPassword(){
    let password = document.getElementById("password1").value;
    let cnfrmPassword = document.getElementById("password2").value;

let message = document.getElementById("pw1_check");
let message2 = document.getElementById("pw2_check");


if(password.length != 0){
    if(password.length<6){
        message.textContent=" Too short"
        // message.style.backgroundColor= '#3ae374';
        // message.style.color= 'white';

    }else{
        message.textContent=" "
    }

    if(password.length !== cnfrmPassword.length){
        message2.textContent=" the tow password don't match"
    }else{
        message2.textContent=" "

    }
}
}