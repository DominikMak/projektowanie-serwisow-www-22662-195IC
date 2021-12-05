console.log(player);
console.log("player = " + JSON.stringify(player, null, 4));

function showAnswers() {
    showPlayers(getPlayersNumber());
}

//Zadanie 1, Task 1: 

//Pobranie/utworzenie potrzebnych elementów
let listaZad1 = document.getElementById('plList');
listaZad1.value = 1;
let list = document.getElementById('expLeft');
let currExp = document.createElement('li');
let nexExp = document.createElement('li');
let expLeft = document.createElement('li');

let guildUser = document.getElementById('guildUser');
let whatGuild = document.createElement('li');


//Funkcja wyświetlająca listę graczy pobieranych z obiektu JSON
function showPlayers(tab) {
    tab.forEach(element => {
        let playerList = document.getElementById('plList');
        let option = document.createElement('option');
        option.value = element;
        option.text = player.info[element].username;
        playerList.appendChild(option);
    });
}

//Funkcja wyświetlająca różnicę dwóch wartości pobrnaych z obiektu JSON
function showHowMuchExpLeft(fn, plIx) {
    currExp.innerText = "Obecne doświadczenie: " + getPlayerExp(getPlayersNumber())[plIx];
    nexExp.innerText = "Wymagane doświadczenie do następnego poziomu: " + getPlayerNextExp(getPlayersNumber())[plIx];
    expLeft.innerText = "Pozostało : " + fn(getPlayerNextExp(getPlayersNumber())[plIx], getPlayerExp(getPlayersNumber())[plIx]) + " punktów do następnego poziomu.";

    list.appendChild(currExp);
    list.appendChild(nexExp);
    list.appendChild(expLeft);
}

//Funkcja pobierająca pierwszą wartość z obiektu JSON
function getPlayerExp(tab) {
    let exp = [];
    tab.forEach(element => {
        exp[element] = player.gameStats[element].exp;
    })
    return exp;
}

//Funkcja pobierająca drugą wartość z obiektu JSON
function getPlayerNextExp(tab) {
    let Nexp = [];
    tab.forEach(element => {
        Nexp[element] = player.gameStats[element].status.levelStatus.nextLevelExp;
    })
    return Nexp;
}

//Funkcja pobierająca liczbę użytkowników z obiektu JSON
function getPlayersNumber() {
    let index = [];
    for (let i = 0; i < player.info.length; i++) {
        index[i] = i;
    }
    return index;
}

//Funkcja licząca różnicę dwóch liczb
function roznica(a, b) {
    return a - b;
}

//TASK 2
function showWhatGuild(fn) {
    fn(player.info[listaZad1.value].username, player.gameStats[listaZad1.value].guildName);
}

function runGuild() {
    showWhatGuild(function (a, b) {
        let txt = `Użytkownik ${a} należy do gildi '${b}'`;
        whatGuild.innerText = txt;
        guildUser.appendChild(whatGuild);
    })
}

//Zadanie 2, TASK 1:
let commentID, userID, email, body;
let showComment = document.getElementById('commentData');
let showUserID = document.createElement('li');
let showEmail = document.createElement('li');
let showTxt = document.createElement('li');
let showID = document.createElement('li');

let wynikZad2 = document.getElementById('wynikZad2');
let wynikZad2T2 = document.getElementById('wynikZad2-2');


fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(commentData => {
        commentID = commentData.postId;
        userID = commentData.id;
        email = commentData.email;
        body = commentData.body;
    })
    .catch(function (error) { console.error(error) })
    .finally(function () {
        showID.innerText = "ID komentarza: " + commentID;
        showUserID.innerText = "ID użytkownika: " + userID;
        showEmail.innerText = "Email: " + email;
        showTxt.innerText = "Treść: " + body;
        showComment.appendChild(showID);
        showComment.appendChild(showUserID);
        showComment.appendChild(showEmail);
        showComment.appendChild(showTxt);
    })

function sum(a, b, fn) {
    let sum = a + b;
    fn(sum);
}

// oczekiwanie na pobranie danych 0.5s
setTimeout(() => {
    sum(userID, commentID, function (res) {
        wynikZad2.innerText = 'ID komentarza + ID użytkownika = ' + res;
    })
}, 500);

//TASK 2

function newObject(email, txt) {
    let object = {
        mail: email,
        text: txt
    };
    return object;
}

function createNewObject(checkID) {
    return new Promise((resolve, reject) => {
        if (checkID == userID) {
            resolve(newObject(email, body));
        } else {
            reject(checkID);
        }
    });
}

setTimeout(() => {
    createNewObject(userID).then(data => wynikZad2T2.innerText = 'Nowy obiekt: \nE-mail: ' + data.mail + "\nText: " + data.text);
    createNewObject('999').catch(data => console.log('błąd, podano błędne ID: ' + data));
    createNewObject(userID).finally(() => console.log('Zakończono'));
}, 1000);

//ZAD 3 
let url = 'https://jsonplaceholder.typicode.com/comments/2'
let wynikZad3T1 = document.getElementById('wynikZad3T1');
let wynikZad3T2 = document.getElementById('wynikZad3T2');

async function getAsync(url) {
    let res = await fetch(url);
    if (res.ok) {
        let comment = await res.json();
        commentID = comment.postId;
        userID = comment.id;
        email = comment.email;
        body = comment.body;

        //Task1
        sum(userID, commentID, function (res) {
            wynikZad3T1.innerText = 'ID komentarza + ID użytkownika = ' + res;
        });

        //Task2
        createNewObject(userID).then(data => wynikZad3T2.innerText = "Nowy obiekt: \nE-mail: " + data.mail + "\nText: " + data.text);
        createNewObject('997').catch(data => console.log('błąd, podano błędne ID: ' + data));
        createNewObject(userID).finally(() => console.log('Zakończono'));
    }
}

setTimeout(() => {
    getAsync(url);
}, 4000);


//ZAD 4

let ajaxUrl = 'https://jsonplaceholder.typicode.com/comments/29';

let xmlhttprequest = new XMLHttpRequest;

let wynikZad4T1 = document.getElementById('wynikZad4T1');
let wynikZad4T2 = document.getElementById('wynikZad4T2');

setTimeout(() => {
    xmlhttprequest.open('GET', ajaxUrl);
    xmlhttprequest.responseType = 'json';
    xmlhttprequest.send();
    xmlhttprequest.onload = function () {
        let jsonObj = xmlhttprequest.response;

        commentID = jsonObj.postId;
        userID = jsonObj.id;
        email = jsonObj.email;
        body = jsonObj.body;

        //task1
        sum(userID, commentID, function (res) {
            wynikZad4T1.innerText = 'ID komentarza + ID użytkownika = ' + res;
        });

        //task2
        createNewObject(userID).then(data => wynikZad4T2.innerText = "Nowy obiekt: \nE-mail: " + data.mail + "\nText: " + data.text);
        createNewObject('997').catch(data => console.log('błąd, podano błędne ID: ' + data));
        createNewObject(userID).finally(() => console.log('Zakończono'));
    };
    xmlhttprequest.onerror = function () {
        wynikZad4T1.innerText = 'XMLHttpRequest error!';
    }
}, 3000);

//ZAD 5

setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/comments/15')
        .then(response => response.json())
        .then(comData => {
            commentID = comData.postId;
            userID = comData.id;
            email = comData.email;
            body = comData.body;
        })
        .catch(function (err) {
            console.error(err)
        })
        .finally(function () {

            //TASK 1:
            sum(userID, commentID, function (res) {
                wynikZad5T1.innerText = 'ID komentarza + ID użytkownika = ' + res;
            });

            //TASK 2:
            createNewObject(userID).then(data => wynikZad5T2.innerText = "Nowy obiekt: \nE-mail: " + data.mail + "\nText: " + data.text);
            createNewObject('1000').catch(data => console.log('błąd, podano błędne ID: ' + data));
            createNewObject(userID).finally(() => console.log('Zakończono'));
        })
}, 1500);

//ZAD 6
let wynikZad6T1 = document.getElementById('wynikZad6T1');
let wynikZad6T2 = document.getElementById('wynikZad6T2');

setTimeout(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments/69')
        .then(function (res) {
            commentID = res.data.postId;
            userID = res.data.id;
            email = res.data.email;
            body = res.data.body;

            sum(userID, commentID, function (res) {
                wynikZad6T1.innerText = 'ID komentarza + ID użytkownika = ' + res;
            });

            createNewObject(userID).then(data => wynikZad6T2.innerText = "Nowy obiekt: \nE-mail: " + data.mail + "\nText: " + data.text);
            createNewObject('69').catch(data => console.log('błąd, podano błędne ID: ' + data));
            createNewObject(userID).finally(() => console.log('Zakończono'));
        })
        .catch(function (err) {
            console.log("AXIOS error: " + err);
        })
        .then(function () {
            console.log('Koniec!');
        });
}, 5000);