// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Système qui permet de rechercher un personnage
// Version   :   1.0, 27.04.2020, LR, version initiale


// Création des variables
var barreRecherche = document.getElementById("barreRecherche"); // Input de la barre de recherche
var affichage = document.getElementById("listePersonnages"); // Div dans laquelle est affiché le lien vers le personnage


/**
 * Permet de trouver la correspondance dans le tableau des personnages
 */
function rechercher() {
    var entree = barreRecherche.value;

    affichage.innerHTML = "";

    if (entree.length != 0) {
        document.tabPersonnages.forEach(function(element, index) {

            var mots = entree.split(' ');

            mots.forEach(mot => {
                if (element.nom.toLowerCase().includes(mot.toLowerCase()) || element.prenom.toLowerCase().includes(mot.toLowerCase()) || element.nomHero.toLowerCase().includes(mot.toLowerCase())) {

                    var personnage = document.createElement("div");
                    personnage.indexPersonnage = index;

                    personnage.innerHTML = '<img src="' + element.photo + ' alt="' + element.toString() + '"">'
                    personnage.innerHTML += '<a href="personnage.html">' + element.toString() + "</a>";

                    affichage.appendChild(personnage);

                    break;
                }
            });


        });
    }
}

barreRecherche.addEventListener("keyup", rechercher); /* rajoute l'évenement sur la arre de recherche */