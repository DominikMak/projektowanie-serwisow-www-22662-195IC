function pokazOdpowiedz(x, y)
{
  const el = document.createElement("p");
  el.classList.add("poprawnaOdp");
  el.innerText = 'Poprawna odpowiedź: ' + y;
  const button = document.getElementById(x);
  button.before(el);
  document.getElementById(x).onclick = null;
}

function pokazOdpowiedzLitera(x, y)
{
  const el = document.createElement("p");
  el.classList.add("poprawnaOdpLitera");
  el.innerText = y;
  const div = document.getElementById(x);
  div.appendChild(el);
}

function pokazWynik()
{
  const imie = document.getElementById("imie");
  const nazwisko = document.getElementById("nazwisko");
  const dataUr = document.getElementById("dataUr");
  const wynik = document.getElementById("wynik");
  
  

  const wynikTekst = document.createElement("p");
  wynikTekst.classList.add("wynikTest");
  wynikTekst.innerHTML = "Imie: " + imie.value + "</br>" + "Nazwisko: " + nazwisko.value + "</br>" + "Data urodzenia: " + dataUr.value + "</br>" + "Ocena: " + (wynik.value/20)*100 + "%";
  const form = document.getElementById("formularz");
  form.after(wynikTekst);
}