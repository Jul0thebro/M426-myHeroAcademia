// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Permet de mettre le bon affichage en fonction du personnage choisi
// Version   :   1.0, 27.04.2020, LR, version initiale

// Constantes
const MESSAGE_REDIRECTION = "Vous devez d'abord choisir un personnage à afficher, nous allons vous rediriger sur la page pour choisir votre personnage.";
const NOM_PAGE_COURANTE = "personnage.html";
const NOM_PAGE_REDIRECTION = "index.html";

// Variables
var idPersonnageChoisi;// Personnage choisi

// Récupère les élments html qui vont contenir les informations 
var image = document.getElementById("image");
var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var nomHero = document.getElementById("nomHero");
var age = document.getElementById("age");
var alter = document.getElementById("alter");
var fonction = document.getElementById("fonction");
var histoire = document.getElementById("contenuHistoire");
var premiereApparition = document.getElementById("premiereApparition");

/**
 * Permet de récupérer les informations du personnage à afficher
 * @return {Boolean} retourne true si on a les in formations sinon retourne false
 */
function recupererPersonnageChoisi() {
    var idPersonnageChoisiLocalStorage = localStorage.getItem("idPersonnageChoisi");

    if (idPersonnageChoisiLocalStorage == null) {
        idPersonnageChoisi = null;
        return false;
    }
    else {
        idPersonnageChoisi = idPersonnageChoisiLocalStorage;
        return true;
    }
}

/**
 * Affiche toutes les informaztions du personnage
 */
function afficherPersonnage() {
    if (recupererPersonnageChoisi()) {
        var personnageTableau = identifierPersonnage(tabPersonnages, idPersonnageChoisi);

        image.src = personnageTableau.photo;
        image.alt = personnageTableau.ecrireNom;

        nom.innerHTML = personnageTableau.nom;
        prenom.innerHTML = personnageTableau.prenom;
        nomHero.innerHTML = personnageTableau.nomHero;

        age.innerHTML += personnageTableau.age;
        alter.innerHTML += personnageTableau.alter;
        fonction.innerHTML += personnageTableau.metier;

        histoire.innerHTML += personnageTableau.histoire;

        premiereApparition.innerHTML += personnageTableau.episode.ecrireEpisodeAbrege();
    } else {
        redirection(NOM_PAGE_COURANTE, NOM_PAGE_REDIRECTION, MESSAGE_REDIRECTION);
    }
}

/**
 * Permet de récupérer le personnage qui a été choisi
 * @param {Array} tableauPersonnages tableau contenant tous les personnages
 * @param {Number} idPersonnage Id unique de chaque personnage, différent de l'index dans le tableau
 */
function identifierPersonnage(tableauPersonnages, idPersonnage) {
    var personnage = null;

    for (let index = 0; index < tableauPersonnages.length; index++) {
        if(idPersonnage == tableauPersonnages[index].id) {
            personnage = tableauPersonnages[index];
            
            // Permet de sortir de la boucle dès qu'on a trouvé le personnage
            index = tableauPersonnages.length;
        }
    }

    return personnage;
}

afficherPersonnage();