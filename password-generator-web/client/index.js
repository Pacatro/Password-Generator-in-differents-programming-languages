const checkCombinations = (checkbox_highLetters, checkbox_lowLetters, checkbox_numbers, checkbox_symbols) => {
    const low_chars = 'abcdefghijklmnopqrstuvwxyz'
    const high_chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '#@=<>-+*;\\//'
  
    const selections = [
        { chars: low_chars, selected: checkbox_lowLetters.checked },
        { chars: high_chars, selected: checkbox_highLetters.checked },
        { chars: numbers, selected: checkbox_numbers.checked },
        { chars: symbols, selected: checkbox_symbols.checked },
    ]
  
    const output = selections
      .filter((selection) => selection.selected)
      .map((selection) => selection.chars)
      .join('')
  
    return output.length > 0 ? output : 'empty'
}

const generatePassword = () => {
    let checkbox_lowLetters = document.getElementById('lowchar-check') 
    let checkbox_highLetters = document.getElementById('highchar-check') 
    let checkbox_numbers = document.getElementById('number-check') 
    let checkbox_symbols = document.getElementById('symbol-check') 
    let characters = '' 
    let password = '' 
    let text = document.getElementById('password-text') 
    let long = document.getElementById('long').value

    characters = checkCombinations(checkbox_highLetters, checkbox_lowLetters, checkbox_numbers, checkbox_symbols)

    long = parseInt(long)

    if(long > 0 && characters !== 'empty' && long !== 13){
        for(let i = 0; i<long; i++){
            let random = Math.floor(Math.random() * characters.length)
            password += characters.at(random)
        }
      
        text.value = password

    } else{ 
        text.value = "You must write a lenght or check an option."

        setTimeout(() => {
            text.value = ""
        }, 2000)        
    }
   
}

const copy = () => {
    let text = document.getElementById('password-text')

    text.select()
    document.execCommand('copy')
}

/*----------------------
LIGHT AND DARK MODE
----------------------*/

const light_mode = () => {
    let element = document.body
    let container = document.getElementById("cont")
    let button = document.getElementById("generate-button")
    let password_div = document.getElementById("password-div")
    let password_text = document.getElementById("password-text")
    let lenght_box = document.getElementById("long")
    let copy_button = document.getElementById("copy-button")
    let save_button = document.getElementById("save")
    let light_mode_button = document.getElementById("light-button")
    let dark_mode_button = document.getElementById("dark-button")
    let account_button = document.getElementById("account")
    let historial_button = document.getElementById("historial")

    button.style.color = "black"
    button.style.backgroundColor = "white"
    button.style.borderColor = "black"
    password_div.style.backgroundColor = "white"
    password_div.style.borderColor = "black"
    password_text.style.color = "black"
    password_text.style.backgroundColor = "white"
    lenght_box.style.backgroundColor = "white"
    lenght_box.style.color = "black"
    lenght_box.style.borderColor = "black"
    copy_button.style.backgroundImage = "url(assets/copy_icon_lm.png)"
    copy_button.style.backgroundColor = "white"
    container.style.color = "black"
    save_button.style.backgroundColor = "white"
    save_button.style.color = "black"
    save_button.style.borderColor = "black"
    light_mode_button.style.backgroundColor = "white"
    light_mode_button.style.color = "black"
    light_mode_button.style.borderColor = "black"
    dark_mode_button.style.backgroundColor = "white"
    dark_mode_button.style.color = "black"
    dark_mode_button.style.borderColor = "black"
    account_button.style.backgroundColor = "white"
    account_button.style.color = "black"
    account_button.style.borderColor = "black"
    historial_button.style.backgroundColor = "white"
    historial_button.style.color = "black"
    historial_button.style.borderColor = "black"
    element.className = "light-mode"
}

const dark_mode = () => {
    let body = document.body
    let container = document.getElementById("cont")
    let button = document.getElementById("generate-button")
    let password_div = document.getElementById("password-div")
    let password_text = document.getElementById("password-text")
    let lenght_box = document.getElementById("long")
    let copy_button = document.getElementById("copy-button")
    let save_button = document.getElementById("save")
    let light_mode_button = document.getElementById("light-button")
    let dark_mode_button = document.getElementById("dark-button")
    let account_button = document.getElementById("account")
    let historial_button = document.getElementById("historial")

    button.style.color = "white"
    button.style.backgroundColor = "#2D2D2D"
    button.style.borderColor = "white"
    password_div.style.backgroundColor = "#2D2D2D"
    password_div.style.borderColor = "white"
    password_text.style.color = "white"
    password_text.style.backgroundColor = "#2D2D2D"
    lenght_box.style.backgroundColor = "#2D2D2D"
    lenght_box.style.color = "white"
    lenght_box.style.borderColor = "white"
    copy_button.style.backgroundImage = "url(assets/copy_icon_bm.png)"
    container.style.color = "white"
    copy_button.style.backgroundColor = "#2D2D2D"
    save_button.style.backgroundColor = "#2D2D2D"
    save_button.style.color = "white"
    save_button.style.borderColor = "white"
    light_mode_button.style.backgroundColor = "#2D2D2D"
    light_mode_button.style.color = "white"
    light_mode_button.style.borderColor = "white"
    dark_mode_button.style.backgroundColor = "#2D2D2D"
    dark_mode_button.style.color = "white"
    dark_mode_button.style.borderColor = "white"
    account_button.style.backgroundColor = "#2D2D2D"
    account_button.style.color = "white"
    account_button.style.borderColor = "white"
    historial_button.style.backgroundColor = "#2D2D2D"
    historial_button.style.color = "white"
    historial_button.style.borderColor = "white"
    body.className = "dark-mode"
}