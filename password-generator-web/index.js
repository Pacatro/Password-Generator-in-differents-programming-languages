const generatePassword = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@=<>-;\\//';
    var password = '';
    var text = document.getElementById('password-text');
    var long = document.getElementById('long').value;

    long = parseInt(long);

    for(var i = 0; i<long; i++){
        var random = Math.floor(Math.random() * characters.length);
        password += characters.at(random);
    }
  
    text.value = password;
}

const copy = () => {
    var text = document.getElementById('password-text');
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand('copy');
}