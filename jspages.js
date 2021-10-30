var taille_de_bangala = sessionStorage.getItem("taille_de_bangala");
taille_de_bangala = parseInt(taille_de_bangala, 10);

function ajoute(nombre, next) {
  console.log(taille_de_bangala, nombre);
  taille_de_bangala += nombre;
  console.log(taille_de_bangala);
  sessionStorage.setItem("taille_de_bangala", taille_de_bangala);
  window.location.href = next;
}

function ajoutebis(nombre, next) {
  console.log(taille_de_bangala, nombre);
  taille_de_bangala += nombre;
  console.log(taille_de_bangala);
}

function display_num() {
  document.getElementById("myText").innerHTML = taille_de_bangala;
  console.log("displayed", taille_de_bangala);
}

function display_end() {
  document.getElementById("myText").innerHTML = taille_de_bangala;
  document.getElementById("myText2").innerHTML = taille_de_bangala;
  var image = document.getElementById("test");

  if (taille_de_bangala < -1) {
    document.getElementById("resumer1").innerHTML =
      "Tu n'as pas de bangala mais tu posséde un vagin de";
    document.getElementById("resumer2").innerHTML =
      "cm. D'après maeva ghennam après ton lifting du vagin, \n tu a un vagin d'un enfant de 12 ans !";
    image.setAttribute("src", "/image_fin/maeva.jpeg");
  } else if (taille_de_bangala == 0) {
    document.getElementById("resumer1").innerHTML = "Ton bangala fait ";
    document.getElementById("resumer2").innerHTML =
      "cm, tu posséde donc un entre-jambe aussi lisse que le crane a moha ";
    image.setAttribute("src", "/image_fin/moha.jpg");
  } else if (taille_de_bangala < 5) {
    document.getElementById("resumer1").innerHTML = "Ton bangala fait ";
    document.getElementById("resumer2").innerHTML =
      "cm, tu posséde donc une bite de la taille a Bouly";
    image.setAttribute("src", "/image_fin/bouly.jfif");
  } else if (taille_de_bangala < 16) {
    document.getElementById("resumer1").innerHTML = "Ton bangala fait ";
    document.getElementById("resumer2").innerHTML =
      "cm, tu posséde donc une bite dans la moyenne européenne (bravo) ";
    image.setAttribute("src", "/image_fin/europe.webp");
  } else if (taille_de_bangala < 25) {
    document.getElementById("resumer1").innerHTML = "Ton bangala fait ";
    document.getElementById("resumer2").innerHTML =
      "cm, tu posséde donc une bite de taille supérieur (tu rentres dans la catégorie bbc)";
    image.setAttribute("src", "/image_fin/18.jfif");
  } else if (taille_de_bangala < 35) {
    document.getElementById("resumer1").innerHTML = "Ton bangala fait ";
    document.getElementById("resumer2").innerHTML =
      "cm, tu posséde donc une bite qui a une taille comparable a celle de VICTOR";
    image.setAttribute("src", "image_fin/Capture.PNG");
  } else if (taille_de_bangala < 50) {
    document.getElementById("resumer1").innerHTML = "Ton bangala fait ";
    document.getElementById("resumer2").innerHTML =
      "cm, tu posséde donc une bite aussi lourde que la fameuse influenceuse Sarah Fraisou ! (fallait le faire quand même)";
    image.setAttribute("src", "/image_fin/sarah.jpg");
  } else {
    document.getElementById("resumer1").innerHTML = "Ton bangala fait ";
    document.getElementById("resumer2").innerHTML =
      "cm, T'es vraiment sur de toi la ?";
    image.setAttribute("src", "/image_fin/menteur.jpg");
  }

  console.log("displayed end");
}
