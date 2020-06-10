// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Affiche les bonnes informations de l'épisode choisi
// Version   :   1.0, 10.06.2020, LR, version initiale

const MESSAGE_REDIRECTION = "Aucun épisode n'a été choisi, vous allez être redirigé sur la page d'accueil";
const NOM_PAGE_COURANTE = "episode.html";
const NOM_PAGE_REDIRECTION = "index.html";

var epsiodeChoisi = null;

var conteneurNomEpisode;
var conteneurNumEpisode;
var conteneurNumSaison;
var conteneurImageEpisode;

/**
 * Permet de récupérer l'épisode choisi
 * @return {Boolean} retourne true sii l'opération a réussi et false si elle a échouée
 */
function recupererEpisodeChoisi() {
    var numSaison = localStorage.getItem("numSaisonChoisi");
    var numEpisode = localStorage.getItem("numEpisodeChoisi");

    if (numSaison == null || numEpisode == null) {
        return false;
    } else {
        episodeChoisi = tabEpisodes[numSaison][numEpisode];
        return true;
    }
}

function afficherEpisode() {
    if(recupererEpisodeChoisi()) {

    } else {
        redirection(NOM_PAGE_COURANTE, NOM_PAGE_REDIRECTION, MESSAGE_REDIRECTION);
    }
}