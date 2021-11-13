let showText = document.getElementById("showYourself");
let colorBox = document.getElementById("colorBox");
let copy = document.getElementById("skopiuj");
let wpisz = document.getElementById("wpisz");
let skroluj = document.getElementById("scroll");
let wytnij = document.getElementById("wytnij");
let klik = document.getElementById("klik");

function handleKeyDown(e){
    let result = document.getElementById("przyklad1");
    let wynik = document.createElement("p");
    wynik.innerText = "Wcisnąłeś klawisz: " + e.code;

    result.appendChild(wynik);
    window.removeEventListener("keydown", handleKeyDown);
}

function handleDoubleClick(){
    document.body.style = "background-color: red";
}

function handleMouseEnter(){
    let txt = document.getElementById("widzisz");
    txt.style.color = "white";
}

function handleMouseDown(){
    colorBox.style.backgroundColor = "red";
}

function handleMouseUp(){
    colorBox.style.backgroundColor = "green";
}

function handleResize(){
    let wysokosc = document.getElementById("height");
    let szerokosc = document.getElementById("width");
    wysokosc.innerText = ' ' + window.innerHeight + 'px';
    szerokosc.innerText = ' ' + window.innerHeight + 'px';
}

function handleCopy(){
    alert("Skopiowałeś tekst!");
}

function handleChange(){
    let tekst = wpisz.value;
    tekst = tekst.toUpperCase();
    wpisz.value = tekst;
}

function handleScroll(){
    let color = Math.floor(Math.random()*16777215).toString(16);
    skroluj.style.backgroundColor = "#" + color;
}

function handleCut() {
    wytnij.style.color = "red";
}

function handleClick() {
    klik.innerText = "Koniec przykładów :)";
}

window.addEventListener("keydown", handleKeyDown);
document.addEventListener("dblclick", handleDoubleClick);
showText.addEventListener("mouseenter", handleMouseEnter);
colorBox.addEventListener("mousedown", handleMouseDown);
colorBox.addEventListener("mouseup", handleMouseUp);
window.addEventListener("resize", handleResize);
copy.addEventListener("copy", handleCopy);
wpisz.addEventListener("change", handleChange);
skroluj.addEventListener("scroll", handleScroll);
wytnij.addEventListener("cut", handleCut);
klik.addEventListener("click", handleClick);