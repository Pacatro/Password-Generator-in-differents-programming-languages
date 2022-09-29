const checkCombinations = (low_chars, high_chars, numbers, symbols, checkbox_highLetters, checkbox_lowLetters, checkbox_numbers, checkbox_symbols) => {

    if(!checkbox_lowLetters.checked && checkbox_highLetters.checked && checkbox_numbers.checked && checkbox_symbols.checked){
        return high_chars + numbers + symbols;
    }

    else if(checkbox_lowLetters.checked && !checkbox_highLetters.checked && checkbox_numbers.checked && checkbox_symbols.checked){
        return low_chars + numbers + symbols;
    }

    else if(checkbox_lowLetters.checked && checkbox_highLetters.checked && !checkbox_numbers.checked && checkbox_symbols.checked){
        return low_chars + high_chars + symbols;
    }

    else if(checkbox_lowLetters.checked && checkbox_highLetters.checked && checkbox_numbers.checked && !checkbox_symbols.checked){
        return low_chars + numbers + high_chars;
    }

    else if(!checkbox_lowLetters.checked && !checkbox_highLetters.checked && checkbox_numbers.checked && checkbox_symbols.checked){
        return numbers + symbols;
    }

    else if(checkbox_lowLetters.checked && checkbox_highLetters.checked && !checkbox_numbers.checked && !checkbox_symbols.checked){
        return low_chars + high_chars;
    }

    else if(!checkbox_lowLetters.checked && checkbox_highLetters.checked && !checkbox_numbers.checked && checkbox_symbols.checked){
        return high_chars + symbols;
    }

    else if(!checkbox_lowLetters.checked && checkbox_highLetters.checked && checkbox_numbers.checked && !checkbox_symbols.checked){
        return numbers + high_chars;
    }
    
    else if(checkbox_lowLetters.checked && !checkbox_highLetters.checked && !checkbox_numbers.checked && checkbox_symbols.checked){
        return symbols + low_chars;
    }

    else if(checkbox_lowLetters.checked && !checkbox_highLetters.checked && checkbox_numbers.checked && !checkbox_symbols.checked){
        return numbers + low_chars;
    }

    else if(!checkbox_lowLetters.checked && !checkbox_highLetters.checked && !checkbox_numbers.checked && checkbox_symbols.checked){
        return symbols;
    }

    else if(!checkbox_lowLetters.checked && !checkbox_highLetters.checked && checkbox_numbers.checked && !checkbox_symbols.checked){
        return numbers;
    }

    else if(checkbox_lowLetters.checked && !checkbox_highLetters.checked && !checkbox_numbers.checked && !checkbox_symbols.checked){
        return low_chars;
    }

    else if(!checkbox_lowLetters.checked && checkbox_highLetters.checked && !checkbox_numbers.checked && !checkbox_symbols.checked){
        return high_chars;
    }

    else if(checkbox_lowLetters.checked && checkbox_highLetters.checked && checkbox_numbers.checked && checkbox_symbols.checked){
        return low_chars + high_chars + numbers + symbols;
    }

    return 'empty';
}

const generatePassword = () => {

    const low_chars = 'abcdefghijklmnopqrstuvwxyz', high_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', numbers = '0123456789', symbols = '#@=<>-;\\//';
    var checkbox_lowLetters = document.getElementById('lowchar-check'), checkbox_highLetters = document.getElementById('highchar-check'), 
    checkbox_numbers = document.getElementById('number-check'), checkbox_symbols = document.getElementById('symbol-check'), 
    characters = '', password = '', text = document.getElementById('password-text'), long = document.getElementById('long').value;

    characters = checkCombinations(low_chars, high_chars, numbers, symbols, checkbox_highLetters, checkbox_lowLetters, checkbox_numbers, checkbox_symbols)

    long = parseInt(long);

    if(long > 0 && characters !== 'empty' && long !== 13){
        for(var i = 0; i<long; i++){
            var random = Math.floor(Math.random() * characters.length);
            password += characters.at(random);
        }
      
        text.value = password;

    } else{ 
        text.value = "You must write a lenght or check an option.";

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

const light_mode = () => {
    var element = document.body;
    var container = document.getElementById("cont");
    var button = document.getElementById("generate-button");
    var password_div = document.getElementById("password-div");
    var password_text = document.getElementById("password-text");
    var lenght_box = document.getElementById("long");
    var copy_button = document.getElementById("copy-button");

    button.style.color = "black";
    button.style.backgroundColor = "white";
    button.style.borderColor = "black";
    password_div.style.backgroundColor = "white";
    password_div.style.borderColor = "black";
    password_text.style.color = "black";
    password_text.style.backgroundColor = "white";
    lenght_box.style.backgroundColor = "white";
    lenght_box.style.color = "black";
    lenght_box.style.borderColor = "black";
    copy_button.style.backgroundImage = "url(assets/copy_icon_lm.png)";
    copy_button.style.backgroundColor = "white";
    container.style.color = "black";
    element.className = "light-mode";
}

const dark_mode = () => {
    var body = document.body;
    var container = document.getElementById("cont");
    var button = document.getElementById("generate-button");
    var password_div = document.getElementById("password-div");
    var password_text = document.getElementById("password-text");
    var lenght_box = document.getElementById("long");
    var copy_button = document.getElementById("copy-button");

    button.style.color = "white";
    button.style.backgroundColor = "#2D2D2D";
    button.style.borderColor = "white";
    password_div.style.backgroundColor = "#2D2D2D";
    password_div.style.borderColor = "white";
    password_text.style.color = "white";
    password_text.style.backgroundColor = "#2D2D2D";
    lenght_box.style.backgroundColor = "#2D2D2D";
    lenght_box.style.color = "white";
    lenght_box.style.borderColor = "white";
    copy_button.style.backgroundImage = "url(assets/copy_icon_bm.png)"
    container.style.color = "white";
    copy_button.style.backgroundColor = "#2D2D2D";
    body.className = "dark-mode";
}