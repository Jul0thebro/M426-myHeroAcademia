// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Affiche les bonnes informations de l'épisode choisi
// Version   :   1.0, 10.06.2020, LR, version initiale

const MESSAGE_REDIRECTION = "Aucun épisode n'a été choisi, vous allez être redirigé sur la page d'accueil";
const NOM_PAGE_COURANTE = "episode.html";
const NOM_PAGE_REDIRECTION = "index.html";

/**
 * @type {Episode} episode qui a été choisi
 */
var epsiodeChoisi = null;
var personnagesPresents = null;

var conteneurImageEpisode = document.getElementById("imageEpisode");
var conteneurNomEpisode = document.getElementById("titre");
var conteneurNumEpisode = document.getElementById("episode");
var conteneurNumSaison = document.getElementById("saison");
var conteneurPersonnagesPresents = document.getElementById("listePersonnages");

/**
 * Permet de récupérer l'épisode choisi
 * @return {Boolean} retourne true sii l'opération a réussi et false si elle a échouée
 */
function recupererEpisodeChoisi() {
    var numSaison = localStorage.getItem("numSaisonChoisi");
    var numEpisode = localStorage.getItem("numEpisodeChoisi");

    if (numSaison == null || numSaison == "undefined" || numEpisode == null || numEpisode == "undefined") {
        return false;
    } else {
        episodeChoisi = tabEpisodes[numSaison][numEpisode];
        return true;
    }
}

/**
 * Peremet de connaître les personnges qui apparaissent la première fois dans cet épsiode
 * @param {Array of Personnage} tabPersonnages tableau qui conteint les informations de tous les personnages
 * @param {Number} numSaison numéro de la saison de l'épisode
 * @param {Number} numEpisode numéro de l'épisode
 * @return {Array} tableau des personnages qui apparaissent la première fois
 */
function getPersonnagesEpisode(tabPersonnages, numSaison, numEpisode) {
    var personnagesPresents = new Array();

    tabPersonnages.forEach(function (personnage) {
        if (personnage.episode.numSaison == numSaison && personnage.episode.numEpisode == numEpisode) {
            personnagesPresents.push(personnage);
        }
    });

    return personnagesPresents;
}

/**
 * Affiche les informations de l'épisode
 */
function afficherEpisode() {
    if (recupererEpisodeChoisi()) {
        conteneurImageEpisode.src = episodeChoisi.photo;
        conteneurImageEpisode.alt = episodeChoisi.alt();
        conteneurNomEpisode.innerHTML = episodeChoisi.titre;
        conteneurNumEpisode.innerHTML = "Épisode n°" + episodeChoisi.numEpisode;
        conteneurNumSaison.innerHTML = "Saison n°" + episodeChoisi.numSaison;

        personnagesPresents = getPersonnagesEpisode(tabPersonnages, episodeChoisi.numSaison, episodeChoisi.numEpisode);
        if (personnagesPresents != null) {
            remplirTableauPersonnages(conteneurPersonnagesPresents, personnagesPresents);
        } else {
            conteneurPersonnagesPresents.innerHTML = "Aucun personnage n'est présent pour la première fois dans cet épisode";
            conteneurPersonnagesPresents.className = "aucunPersonnage";
        }
    } else {
        redirection(NOM_PAGE_COURANTE, NOM_PAGE_REDIRECTION, MESSAGE_REDIRECTION);
    }
}

afficherEpisode();