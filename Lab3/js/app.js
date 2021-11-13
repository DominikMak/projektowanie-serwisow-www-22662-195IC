function getPromptTxt(){
    let text = prompt("Wpisz zdanie!");
    if(text == ""){
        console.log("Nie mam co liczyć");
    }
    else{
        countWord(text);
    }
}

function countWord(txt){
    let words = txt.split(" ");
    let counter = 0;

    for(let i = 0; i < words.length; i++){
        counter++;
    }

    let result = document.createElement("p");
    if(counter == 1)
    {
        result.innerText = "Tekst '" + txt + "' składa się z " + counter + " wyrazu.";
    }
    else{
        result.innerText = "Tekst '" + txt + "' składa się z " + counter + " wyrazów.";
    }
    
    let main = document.getElementById("zad1");
    main.appendChild(result);
}

function generateID(){
    let wyswietlID = document.getElementById("zad2");
    let ID = "";
    for(let i = 0; i < 20; i++){
        switch(getRandomNumber(3)){
            //dla 0 - liczby, 1 - litery, 2 - znaki specjalne
            case 0:
                ID += getRandomNumber(10);
                break;
            case 1:
                ID += getRandomCharacter();
                break;
            case 2:
                ID += getRandomSpecial();
                break;
        }
    }

    let result = document.createElement("p");
    result.innerText = "Twoje ID to: '" + ID + "'.";

    wyswietlID.appendChild(result);

    let btn = document.getElementById("idButton");
    btn.disabled = true;
}

function getRandomNumber(range){
    return Math.floor(Math.random() * range);
}

function getRandomCharacter(){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function getRandomSpecial(){
    let special = '[]{};\|,.<>/?!@#$%^&*()-_=+~';
    return special.charAt(Math.floor(Math.random() * special.length));
}

function printNumbers(nr){
    let wyswietl = document.getElementById("zad3");
    let btn = document.getElementById("liczbyButton");
    btn.disabled = true;
    let result = '';
    for(let i = 1; i <= nr; i++){
        result += i;
    }
    let p = document.createElement("p");
    p.innerText = result;

    wyswietl.appendChild(p);

}

function printNumbersRun(){
    let value = document.getElementById("liczba").value;
    printNumbers(value);
}




function checkPalindrom(txt){
    let p = document.createElement("p");
    let wyswietl = document.getElementById("zad4");

    let result = '';

    for(let i = 0; i <= txt.length; i++){
        result += txt.substr(txt.length - i, 1);
    }

    if(txt == result){
        p.innerText = txt + " to palindrom!";
    }
    else{
        p.innerText = txt + " nie jest palindromem";
    }
    console.log(result);
    wyswietl.appendChild(p);

}

function printCheckPalindrom(){
    let value = document.getElementById("tekst").value;
    checkPalindrom(value);
}

function fixName(){
    let text = prompt("Podaj swoje imię:");
    let result = document.createElement("p");
    let wyswietl = document.getElementById("zad5");

    let firstLetter = text.substr(0,1);
    let restName = text.substr(1);
    text = firstLetter.toUpperCase() + restName;

    result.innerText = "Imię " + text + " rozpoczyna się od litery " + firstLetter.toUpperCase();

    wyswietl.appendChild(result);
}

function poryRoku(){
    let imie = document.getElementById("imie").value;
    let miesiac = document.getElementById("miesiac").value;

    let btn = document.getElementById("poryButton");
    btn.disabled = true;

    let result = document.createElement("p");
    let wyswietl = document.getElementById("zad6");

    let zima = ['grudzień', 'styczeń', 'luty'];
    let wiosna = ['marzec', 'kwiecień', 'maj'];
    let lato = ['czerwiec', 'lipiec', 'sierpień'];
    let jesien = ['wrzesień', 'październik', 'listopad'];

    miesiac = miesiac.toLowerCase();

    if(zima.indexOf(miesiac) !== -1){
        result.innerText = imie + " jeździ na sankach";
    }
    else if(wiosna.indexOf(miesiac) !== -1)
    {
        result.innerText = imie + " chodzi po kaluzach";
    }
    else if(lato.indexOf(miesiac) !== -1)
    {
        result.innerText = imie + " się opala";
    }
    else if(jesien.indexOf(miesiac) !== -1)
    {
        result.innerText = imie + " zbiera liscie";
    }
    else 
    {
        result.innerText = imie + " uczy się JS";
    }

    wyswietl.appendChild(result);

}

function checkFemale(name){
    let lastLetter = name[name.length - 1];
    switch(lastLetter){
        case 'a':
            return true;
            break;
        default:
            return false;
            break;
    }
}

function countWomanInTable(){
    let wyswietl = document.getElementById("zad7");
    let result = document.createElement("p");
    let btn = document.getElementById("countWomanButton");
    btn.disabled = true;

    const users = [
        "Ania Nowak",
        "Piotr Kowalski",
        "Bartek Kosecki",
        "Natalia Nowak",
        "Weronika Piotrowska",
        "Agata Karolak",
        "Tomasz Nowak",
        "Mateusz Kowalski",
        "Marcin Kotecki",
        "Beata Lecka",
        "Katarzyna Małecka"
    ]
    let counter = 0;
    for(let i = 0; i < users.length; i++){
        let word = users[i];
        if(checkFemale((word).split(' ')[0])){
            counter++;
        }
    }

    result.innerText = "Tablica zawiera " + counter + " kobiet";
    wyswietl.appendChild(result);
}

function monthName(){
    let result = document.createElement("p");
    let printMonth = document.getElementById("zad8");
    let monthNumber = document.getElementById("numerMiesiaca").value;
    let btn = document.getElementById("monthButton");
    btn.disabled = true;

    const miesiace = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    
    if(monthNumber > 0 && monthNumber <= 12){
        result.innerText = miesiace[monthNumber - 1];
    }else{
        result.innerText = "Błąd!";
    }

    printMonth.appendChild(result);

}