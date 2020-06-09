// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Permet de mettre le bon affichage en fonction du personnage choisi
// Version   :   1.0, 27.04.2020, LR, version initiale

// Constantes
const MESSAGE_REDIRECTION = "Vous devez d'abord choisir un personnage à afficher, nous allons vous rediriger sur la page pour choisir votre personnage.";
const NOM_PAGE_COURANTE = "detailPersonnage.html";
const NOM_PAGE_REDIRECTION = "index.html";

// Variables
var personnageChoisi;// Personnage choisi

// Récupère les élments html qui vont contenir les informations 
var image = document.getElementById("image");
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var nomHero = document.getElementById("nomHero");
var age = document.getElementById("age");
var alter = document.getElementById("alter");
var fonction = document.getElementById("fonction");
var histoire = document.getElementById("contenuHistoire");

/**
 * Permet de récupérer les informations du personnage à afficher
 * @return {Boolean} retourne true si on a les in formations sinon retourne false
 */
function recupererPersonnageChoisi() {
    var personnageChoisiLocalStorage = localStorage.getItem("personnageChoisi");

    if (personnageChoisiLocalStorage == null) {
        personnageChoisi = null;
    }
    else {
        personnageChoisi = personnageChoisiLocalStorage;
    }

    if (personnageChoisi == null) {
        return false;
    } else {
        return true;
    }
}


/**
 * Fait une redirection sur la apge pour choisir un personnage
 */
function redirection() {
    alerterRedirection();
    window.location.href = window.location.href.replace(NOM_PAGE_COURANTE, NOM_PAGE_REDIRECTION);
}

/**
 * Fait une alerte avant la redirection
 */
function alerterRedirection() {
    alert(MESSAGE_REDIRECTION);
}

function afficherPersonnage() {
    if (recupererPersonnageChoisi()) {
        var personnageTableau = personnageChoisi.split(";");

        image.src = personnageTableau[0];
        image.alt = personnageTableau[1] + " " + personnageTableau[2] + " " + personnageTableau[3];

        nom.innerHTML = personnageTableau[1];
        prenom.innerHTML = personnageTableau[2];
        nomHero.innerHTML = personnageTableau[3];

        age.innerHTML += personnageTableau[4];
        alter.innerHTML += personnageTableau[5];
        fonction.innerHTML += personnageTableau[6];

        histoire.innerHTML += personnageTableau[7];
    } else {
        redirection();
    }
}

afficherPersonnage();