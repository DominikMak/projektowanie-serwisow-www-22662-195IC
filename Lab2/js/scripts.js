function captcha() {
    let currentDiv = document.getElementById("captcha");
    currentDiv.innerHTML = '';

    let question = document.createElement("p");

    const options = ["kot", "pies", "samochód"];
    let answer = options[Math.floor(Math.random() * 3)];
    question.innerText = "Znajdź zdjęcie na którym znajduje się " + answer + ":";
    document.getElementById("captcha").appendChild(question);

    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");

    img1.src = 'assets/images/car.png';
    img2.src = 'assets/images/dog.png';
    img3.src = 'assets/images/kot.png';

    img1.id = 'samochód';
    img2.id = 'pies';
    img3.id = 'kot';

    document.getElementById("captcha").appendChild(img1);
    document.getElementById("captcha").appendChild(img2);
    document.getElementById("captcha").appendChild(img3);

    console.log(answer);

    img1.onclick = function() {checkImg(this.id, answer)};
    img2.onclick = function() {checkImg(this.id, answer)};
    img3.onclick = function() {checkImg(this.id, answer)};
}

function checkImg(imageId, imageType) {
    let currentDiv = document.getElementById("captcha");
    console.log(imageId);
    console.log(imageType);
    if(imageId == imageType){
        currentDiv.innerHTML = '';
        let goodAnswer = document.createElement("p");
        goodAnswer.className = "good";
        goodAnswer.innerText = "DOBRA ODPOWIEDŹ!";

        document.getElementById("captcha").appendChild(goodAnswer);
    }
    else{
        currentDiv.innerHTML = '';
        let badAnswer = document.createElement("p");
        badAnswer.className = "bad";
        badAnswer.innerText = "ZŁA ODPOWIEDŹ!";

        document.getElementById("captcha").appendChild(badAnswer);
    }
    let btn = document.createElement("BUTTON");
    btn.innerText = "Jeszcze raz!";
    btn.id = "runCaptcha";
    btn.className = "btn btn-dark";
    btn.onclick = function() {captcha()};
    document.getElementById("captcha").appendChild(btn);
}

function zmienWartosc() {
    let buttons = document.getElementsByClassName("btn btn-dark");

    for(let i = (buttons.length - 1); i >= 0; i--)
    {
        buttons[i].innerText = document.getElementById("nowaWartosc").value;
    }
}

function zmienKolor(event) {
    let poleTesktowe = document.getElementById("zmianaTla");
    let key = event.which || event.keyCode;
    let actualKey = String.fromCharCode(key);
    switch (actualKey) {
        case 'r':
            document.body.style.backgroundColor = "red";
            poleTesktowe.value = '';
            break;
        case 'g':
            document.body.style.backgroundColor = "green";
            poleTesktowe.value = '';
            break;
        case 'b':
            document.body.style.backgroundColor = "blue";
            poleTesktowe.value = '';
            break;
        default:
            alert("Podaj 'R','G' lub 'B'");
            poleTesktowe.value = '';
            break;
    }
}

function pokazKod() {
    let zrodlo = document.getElementById("zrodloKodu");
    let p = document.getElementById("pom");
    p.innerText = zrodlo.innerHTML;
}

function schowajKod() {
    let p = document.getElementById("pom");
    p.innerText = '';
}

function utworzTekst() {
    let p = document.createElement("p");
    let x = document.createTextNode("Stworzyłeś tekst!");
    let li = document.getElementById("createTextAfter");
    p.appendChild(x);
    li.insertBefore(p, li.childNodes[0]);

    let btn = document.getElementById("btnAfterText");
    btn.disabled = "true";
}

function zmienTytul() {
    let newTitle = document.getElementById("nowyTytul");
    document.title = newTitle.value;
}

function nowyElement() {
    'use strict';
    let newElement = document.createElement("p");
    let newElementValue = document.getElementById("nowyElement");
    newElement.innerText = newElementValue.value;

    let div = document.getElementById("elementsContainer");
    div.appendChild(newElement);
    newElementValue.value = '';
    zliczElementy();
}

function zliczElementy(){
    let paragraph = document.getElementById("zliczanie");
    let c = document.getElementById("elementsContainer").childElementCount;
    paragraph.innerText = "DIV zawiera: " + c + " elementy";
}

function dodajKlase() {
    let div = document.getElementById("bezStylu");
    div.classList.add("page-link")
}

function zamienMiejscami() {
    let firstLi = document.getElementById("li8");
    let secondLi = document.getElementById("li9");
    secondLi.insertAdjacentElement("afterend", firstLi);
}

function pozbawStylu() {
    document.getElementById("bezStylu").removeAttribute("class");
}

function usunPunkt() {
    let list = document.getElementById("listaPrzykladow");
    let numerPrzykladu = document.getElementById("liNumber").value
    list.removeChild(list.childNodes[numerPrzykladu - 1]);
}

function zaznaczPunkty() {
    let p = document.getElementById("pom");
    let li = document.getElementsByTagName("li");

    for(let i = 0; i < li.length; i++)
    {
        if(li[i].contains(p))
        {
            li[i].style.backgroundColor = "Yellow";
            li[i].scrollIntoView({inline: "nearest"});
        }
    }
}

function edytujPunkty() {
    let punkty = document.getElementsByClassName("lead");

    for(let i = 0; i < punkty.length; i++)
    {
        punkty[i].contentEditable = true;   
    }
}

function zmienElement() {
    var textnode = document.createTextNode(document.getElementById("nowyEl").value);
    var item = document.getElementById("listaZwierz").childNodes[0];
    item.replaceChild(textnode, item.childNodes[0]);
}

function zmienKursor() {
    document.body.style.cursor = "crosshair";
}

function zmienIkone() {
    let favicon = document.querySelector('[rel=icon]');
    favicon.href = "assets/images/dog.png";
}

function changeImage() {
    let image = document.getElementById('pies');
    if (image.src.match("happy")) {
      image.src = "assets/images/sad_dog.png";
    } else {
      image.src = "assets/images/happy_dog.png";
    }
}

function zmienKolorTekstu() {
    document.body.style.color = document.getElementById("colorPicker").value;
}

function zmienRozmiarPsa() {
    let image = document.getElementById('pies');
    let size = document.getElementById('rozmiarPsa').value + '%';
    console.log(size);
    image.style.width = size;
}

function koniec() {
    document.body.innerHTML = '<h1>Dominik Makuch nr albumu 22662</h1>';
    document.body.style.color = "green";
    document.body.style.backgroundColor = "blue";
}