// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
const titolo = document.querySelector("h1");
console.log(titolo);
titolo.textContent = " EURONICS";

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

const contenitoreArticoli = document.querySelector("#contenitoreArticoli");
console.log(contenitoreArticoli);
contenitoreArticoli.style.background = "white";

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

const footer = document.getElementsByTagName("p");
console.log(footer);
for (let i = 0; i < footer.length; i++) {
  console.log(footer[i]);
  footer[7].textContent = "VIA XXXXXXXXXXXXXXXX";
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link
//Amazon della tabella

const links = document.querySelectorAll("a");
console.log(links);
for (let i = 0; i < links.length; i++) {
  console.log(links[i]);
  links[i].classList.add("nuovaClasse");
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS
//a tutte le immagini della tabella; questa classe deve modificare la visibilità / invisibilità dell'immagine

const immagine = document.querySelectorAll("img");
console.log(immagine);
for (let i = 0; i < immagine.length; i++) {
  console.log(immagine[i]);
  immagine[i].classList.add("visibilitaImg");
}

let cambioDisplay = document.querySelectorAll(".visibilitaImg");
for (let i = 0; i < cambioDisplay.length; i++) {
  console.log(cambioDisplay[i]);
  cambioDisplay[i].style.display = "none";
}
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in
//uno differente, ogni volta che viene invocata

// Genera un numero casuale tra 0 e 255 per rappresentare un canale di colore
function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function coloreRandom() {
  let r = randomNumber();
  let g = randomNumber();
  let b = randomNumber();
  let colore = "rgb" + "(" + r + ", " + g + ", " + b + ")";
  return colore;
}

let coloreCasuale = coloreRandom();
console.log(coloreCasuale);

const cambioColoreTitolo = document.getElementsByTagName("a");
console.log(cambioColoreTitolo);

for (let i = 0; i < cambioColoreTitolo.length; i++) {
  cambioColoreTitolo[i].addEventListener("mouseover", function () {
    cambioColoreTitolo[i].style.color = coloreRandom();
  });
}
