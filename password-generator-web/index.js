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
    container.style.color = "black";
    element.className = "light-mode";
}

const dark_mode = () => {
    var element = document.body;
    var container = document.getElementById("cont");
    var button = document.getElementById("generate-button");
    button.style.color = "black";
    button.style.backgroundColor = "white";
    container.style.color = "white";
    element.className = "dark-mode";
}