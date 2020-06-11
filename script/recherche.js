// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Système qui permet de rechercher un personnage
// Version   :   1.0, 27.04.2020, LR, version initiale

// Création des variables
var barreRecherche = document.getElementById("barreRecherche"); // Input de la barre de recherche
var affichage = document.getElementById("liste"); // Div dans laquelle est affiché le lien vers le personnage

var affichageCourant = 1;

/**
 * Affiche les personnages qui correspondent à la recherche
 */
function rechercher(tableau) {
    var entree = barreRecherche.value;

    if (entree.length != 0) {

        tableau.forEach(function (element, index) {

            var estAffiche = false;

            if (element.ecrireNom().toLowerCase().indexOf(entree.toLowerCase()) > -1) {
                estAffiche = true;
            } else {
                estAffiche = false;
            }

            if (estAffiche && document.getElementById("element_" + index).estDansFiltre) {
                document.getElementById("element_" + index).style.display = "block";
            } else {
                document.getElementById("element_" + index).style.display = "none";
            }
        });
    } else {
        tableau.forEach(function (element, index) {
            if (document.getElementById("element_" + index).estDansFiltre) {
                document.getElementById("element_" + index).style.display = "block";
            } else {
                document.getElementById("element_" + index).style.display = "none";
            }
        });
    }
}

/**
 * Affiche les personnages qui correspondent à la recherche
 */
function rechercherEpisode(tableau) {
    var entree = barreRecherche.value;

    if (entree.length != 0) {
        var saison = new Object();

        for (let indexSaison = 1; indexSaison <= NB_SAISONS; indexSaison++) {
            saison = tableau[indexSaison];
            for (let indexEpisode = 1; indexEpisode < eval("NB_EPISODES_SAISON_" + indexSaison); indexEpisode++) {
                var estAffiche = false;

                if (saison[indexEpisode].ecrireEpisodeComplet().toLowerCase().indexOf(entree.toLowerCase()) > -1) {
                    estAffiche = true;
                } else {
                    estAffiche = false;
                }

                if (estAffiche && document.getElementById("element_" + indexEpisode + "_" + indexSaison).estDansFiltre) {
                    document.getElementById("element_" + indexEpisode + "_" + indexSaison).style.display = "block";
                } else {
                    document.getElementById("element_" + indexEpisode + "_" + indexSaison).style.display = "none";
                }
            }
        }
    } else {
        var saison = new Object();

        for (let indexSaison = 1; indexSaison <= NB_SAISONS; indexSaison++) {
            saison = tableau[indexSaison];
            for (let indexEpisode = 1; indexEpisode < eval("NB_EPISODES_SAISON_" + indexSaison); indexEpisode++) {
                if (document.getElementById("element_" + indexEpisode + "_" + indexSaison).estDansFiltre) {
                    document.getElementById("element_" + indexEpisode + "_" + indexSaison).style.display = "block";
                } else {
                    document.getElementById("element_" + indexEpisode + "_" + indexSaison).style.display = "none";
                }
            }
        }
    }
}

/**
 * Permet de faire la recherche adéquate
 */
function effectuerRecherche() {
    if(affichageCourant == 0) {
        rechercher(tabPersonnages)
    } else if(affichageCourant == 1) {
        rechercherEpisode(tabEpisodes)
    }
}

remplirTableauPersonnages(affichage, tabPersonnages);
rechercher(tabPersonnages);

barreRecherche.addEventListener("keyup", effectuerRecherche); /* rajoute l'évenement sur la barre de recherche */