var taille_de_bangala = 0;
document.getElementById("myText").innerHTML = taille_de_bangala;

function display_num() {
  document.getElementById("myText").innerHTML = taille_de_bangala;
  console.log("displayed", taille_de_bangala);
}

function ajoute(nombre, next) {
  taille_de_bangala += nombre;
  console.log(taille_de_bangala);
  sessionStorage.setItem("taille_de_bangala", taille_de_bangala);
  window.location.href = next;
}

function ajoutebis(nombre, next) {
  taille_de_bangala += nombre;
  console.log(taille_de_bangala);
}
