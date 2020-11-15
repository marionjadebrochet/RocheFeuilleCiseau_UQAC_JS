window.onload = function(){
  var saisienom = document.getElementById("saisienom");
  saisienom.textContent = "Inconnu";
  var compteurOrdi = document.getElementById("compteurOrdi");
  compteurOrdi.textContent = "0";
  var compteurJoueur = document.getElementById("compteurJoueur");
  compteurJoueur.textContent = "0";
  var triche = document.getElementById("triche");
  triche.checked = false;
  var message = document.getElementById("message");
  message.textContent = "En attente de votre choix";
  jeu();
  nometraz();
};

//Fonction qui permet de gerer le jeu
function jeu() {
  var images = document.querySelectorAll("img");
  var roche = document.getElementById("roche");
  var feuille = document.getElementById("feuille");
  var ciseau = document.getElementById("ciseau");
  var choixordi = document.getElementById("choixImage");
  var checkBox = document.getElementById("triche");
  var rocheOrdi = document.getElementById("rocheOrdi");
  var feuilleOrdi = document.getElementById("feuilleOrdi");
  var ciseauOrdi = document.getElementById("ciseauOrdi");
  var textCompteurOrdi = document.getElementById("compteurOrdi");
  var textCompteurJoueur = document.getElementById("compteurJoueur");
  var message = document.getElementById("message");
  var compteurOrdi = 0;
  var compteurJoueur = 0;

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
      if (images[i] === roche) {
        roche.onclick=border(roche);
        if (checkBox.checked == true){
          message.textContent = "J'ai gagné";
          feuilleOrdi.style.display = "initial";
          compteurOrdi = compteurOrdi +1;
          textCompteurOrdi.textContent = compteurOrdi;
          setTimeout('clear()', 800);
        } else {
          var imageRetournee = imageRandom();
          if (imageRetournee === "roche") {
            message.textContent = "Match nul";
            setTimeout('clear()', 800);
          }
          if (imageRetournee === "feuille") {
            message.textContent = "J'ai gagné";
            compteurOrdi = compteurOrdi +1;
            textCompteurOrdi.textContent = compteurOrdi;
            setTimeout('clear()', 800);
          }
          if (imageRetournee === "ciseau") {
            message.textContent = "Vous avez gagné";
            compteurJoueur = compteurJoueur +1;
            textCompteurJoueur.textContent = compteurJoueur;
            setTimeout('clear()', 800);
          }
        }
      }
      if (images[i] === feuille) {
        feuille.onclick=border(feuille);
        if (checkBox.checked == true){
          message.textContent = "J'ai gagné";
          ciseauOrdi.style.display = "initial";
          compteurOrdi = compteurOrdi +1;
          textCompteurOrdi.textContent = compteurOrdi;
          setTimeout('clear()', 800);
        } else {
          var imageRetournee = imageRandom();
          if (imageRetournee === "feuille") {
            message.textContent = "Match nul";
            setTimeout('clear()', 800);
          }
          if (imageRetournee === "ciseau") {
            message.textContent = "J'ai gagné";
            compteurOrdi = compteurOrdi +1;
            textCompteurOrdi.textContent = compteurOrdi;
            setTimeout('clear()', 800);
          }
          if (imageRetournee === "roche") {
            message.textContent = "Vous avez gagné";
            compteurJoueur = compteurJoueur +1;
            textCompteurJoueur.textContent = compteurJoueur;
            setTimeout('clear()', 800);
          }
        }
      }
      if (images[i] === ciseau) {
        ciseau.onclick=border(ciseau);
        if (checkBox.checked == true){
          rocheOrdi.style.display = "initial";
          compteurOrdi = compteurOrdi +1;
          textCompteurOrdi.textContent = compteurOrdi;
          message.textContent = "J'ai gagné";
          setTimeout('clear()', 800);
        }else {
          var imageRetournee = imageRandom();
          if (imageRetournee === "ciseau") {
            message.textContent = "Match nul";
            setTimeout('clear()', 800);
          }
          if (imageRetournee === "roche") {
            message.textContent = "J'ai gagné";
            compteurOrdi = compteurOrdi +1;
            textCompteurOrdi.textContent = compteurOrdi;
            setTimeout('clear()', 800);
          }
          if (imageRetournee === "feuille") {
            message.textContent = "Vous avez gagné";
            compteurJoueur = compteurJoueur +1;
            textCompteurJoueur.textContent = compteurJoueur;
            setTimeout('clear()', 800);
          }
        }
      }
    });
  }
};

//Fonction qui permet de savoir sur quels boutons l'utilisateur clique
function nometraz() {
  var input = document.querySelectorAll("input");
  var raz = document.getElementById("RAZ");
  var nom = document.getElementById("nom");

  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", function() {

      if (input[i] === nom) {
        nom.onclick=saisie;
      }
      if (input[i] === raz) {
        raz.onclick=remiseazero;
      }
    });
  }
};

//Fonction qui enleve l'image au centre et le contour à chaque tour
function clear() {
  var rocheOrdi = document.getElementById("rocheOrdi");
  var feuilleOrdi = document.getElementById("feuilleOrdi");
  var ciseauOrdi = document.getElementById("ciseauOrdi");
  var choixordi = document.getElementById("choixImage");
  var roche = document.getElementById("roche");
  var feuille = document.getElementById("feuille");
  var ciseau = document.getElementById("ciseau");
  var message = document.getElementById("message");
  message.textContent = "En attente de votre choix";
  feuilleOrdi.style.display = "none";
  ciseauOrdi.style.display = "none";
  rocheOrdi.style.display = "none";
  roche.style.border="solid 2px #A6A9BF";
  feuille.style.border="solid 2px #A6A9BF";
  ciseau.style.border="solid 2px #A6A9BF";
}

//Fonction pour saisir le nom
function saisie() {
  var valeur = prompt("Quel est votre nom ?");
  var saisienom = document.getElementById("saisienom");
  saisienom.textContent = valeur;
};

//Fonction pour remettre à zero les scores
function remiseazero(){
  var compteurOrdi = document.getElementById("compteurOrdi");
  compteurOrdi.textContent = "0";
  var compteurJoueur = document.getElementById("compteurJoueur");
  compteurJoueur.textContent = "0";
}

//Fonction qui met un border plus foncé et plus grand
function border(e) {
  e.style.border="solid 4px black";
};

//Fonction pour le random de l'image
function imageRandom() {
  var resultat;
  var rocheOrdi = document.getElementById("rocheOrdi");
  var feuilleOrdi = document.getElementById("feuilleOrdi");
  var ciseauOrdi = document.getElementById("ciseauOrdi");
  var random = getRandomArbitrary(1,4);
  console.log(random);
  if (random === 1) {
    ciseauOrdi.style.display = "initial";
    resultat = "ciseau";
  } else if (random === 2) {
    feuilleOrdi.style.display = "initial";
    resultat = "feuille";
  } else if (random === 3) {
    rocheOrdi.style.display = "initial";
    resultat = "roche";
  }
  return resultat;
}

//Fonction pour générer un random
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
