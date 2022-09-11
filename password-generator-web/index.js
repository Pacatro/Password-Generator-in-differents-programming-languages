const generatePassword = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@=<>-;\\//';
    var password = '';
    var text = document.getElementById('password-text');
    var long = document.getElementById('long').value;

    long = parseInt(long);

    if(long > 0){
        for(var i = 0; i<long; i++){
            var random = Math.floor(Math.random() * characters.length);
            password += characters.at(random);
        }
      
        text.value = password;
    }

    else{ 
        text.value = "You must write a lenght.";

        setTimeout(() => {
            text.value = ""
        }, 2000);        
    }

}

const copy = () => {
    var text = document.getElementById('password-text');

    text.select();
    document.execCommand('copy');
}