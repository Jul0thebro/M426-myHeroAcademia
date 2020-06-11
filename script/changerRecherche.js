// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Permet de changer le type de recherche que l'on fait
// Version   :   1.0, 11.06.2020, LR, version initiale

// Déclaration des variables
var boutonPersonnage = document.getElementById("boutonPersonnage");// Bouton qui fait afficher les personnages
var boutonEpisode = document.getElementById("boutonEpisode");// Bouton qui fait afficher les épisode

var conteneurTriPersonnage = document.getElementById("triPersonnage");
var conteneurTriEpisode = document.getElementById("triEpisode");

var conteneurFiltrePersonnage = document.getElementById("filtrePersonnage");
var conteneurFiltreEpisode = document.getElementById("filtreEpisode");

/**
 * Permet de switcher l'affichage entre les épisodes et les personnages
 * @param {Number} indexAffichage Indique quel affichage on veut : 0 pour personnage et 1 pour les épisodes
 */
function changerAffichage(indexAffichage) {

    if (affichageCourant != indexAffichage) {
        affichageCourant = indexAffichage;
        switch (affichageCourant) {
            case 0:// Personnage
                invererAffichage(conteneurTriPersonnage, conteneurFiltrePersonnage, conteneurTriEpisode, conteneurFiltreEpisode);

                remplirTableauPersonnages(affichage, tabPersonnages);
                rechercher(tabPersonnages);
                break;
            case 1:// Episode
                invererAffichage(conteneurTriEpisode, conteneurFiltreEpisode, conteneurTriPersonnage, conteneurFiltrePersonnage);

                remplirTableauEpisodes(affichage, tabEpisodes);
                rechercherEpisode(tabEpisodes);
                break;
        }

        if (indexAffichage == 0) {
            activerBouton(boutonPersonnage);
            desactiverBouton(boutonEpisode);
        } else {
            activerBouton(boutonEpisode);
            desactiverBouton(boutonPersonnage);
        }
    }


}

/**
 * Permet d'intervertir ce qui est affiché
 * @param {HTMLElement} conteneurTriAfficher conteneur qui doit être afficher pour le tri
 * @param {HTMLElement} conteneurFiltreAfficher conteneur qui doit être afficher pour le filtre
 * @param {HTMLElement} conteneurTriEnlever conteneur qui doit être enlever pour le tri
 * @param {HTMlElement} conteneurFiltreEnlever conteneur qui doit être enlever pour le filtre
 */
function invererAffichage(conteneurTriAfficher, conteneurFiltreAfficher, conteneurTriEnlever, conteneurFiltreEnlever) {
    conteneurTriAfficher.style.display = "block";
    conteneurFiltreAfficher.style.display = "block";

    conteneurFiltreEnlever.style.display = "none";
    conteneurTriEnlever.style.display = "none";
}

/**
 * Affichage du bouton activé
 * @param {HTMLElement} bouton bouton qui est activé
 */
function activerBouton(bouton) {
    bouton.style.backgroundColor = "white";
    bouton.style.color = "black";
}

/**
 * Affichage du bouton désactivé
 * @param {HTMLElement} bouton bouton qui est activé
 */
function desactiverBouton(bouton) {
    bouton.style.backgroundColor = "black";
    bouton.style.color = "white";
}

changerAffichage(0);