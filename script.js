// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
const titolo = document.querySelector("h1");
console.log(titolo);
titolo.textContent = " EURONICS";

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

const contenitoreArticoli = document.querySelector("#contenitoreArticoli");
console.log(contenitoreArticoli);
contenitoreArticoli.style.background = "white";

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

const indirizzo = document.getElementsByClassName("indirizzo");
console.log(indirizzo);
indirizzo.textContent = "XXXXXXXXXXXXXXX";

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
visibilitaImg.style.display("none");
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in
//uno differente, ogni volta che viene invocata

const cambioColoreTitolo = document.querySelectorAll("h3");
for (let i = 0; i < cambioColoreTitolo.lenght; i++);
console.log(cambioColoreTitolo[i]);
{
  cambioColoreTitolo[i].style.color = randomColor();
}

// Genera un numero casuale tra 0 e 255 per rappresentare un canale di colore
function randomNumber() {
  return Math.floor(Math.random() * 256);
}

// Genera un colore casuale in formato "rgb(255, 255, 255)"
function randomColor() {
  var red = randomNumber();
  var green = randomNumber();
  var blue = randomNumber();
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// Esempio di utilizzo
let coloreCasuale = randomColor();
console.log(coloreCasuale);
