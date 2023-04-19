function LetterCapitalize(){
    const str = document.querySelector('#stringtext').value;
    const arrayString = str.split(" ");
    for (var i = 0; i < arrayString.length; i++) {
        arrayString[i] = arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1);
    
    }
    const str2 = arrayString.join(" ");

    document.querySelector('#string-output').innerText = (str2);
}

