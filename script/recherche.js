// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Système qui permet de rechercher un personnage
// Version   :   1.0, 27.04.2020, LR, version initiale


// Création des variables
var barreRecherche = document.getElementById("barreRecherche"); // Input de la barre de recherche
var affichage = document.getElementById("listePersonnages"); // Div dans laquelle est affiché le lien vers le personnage


/**
 * Affiche les personnages qui correspondent à la recherche
 */
function rechercher() {
    var entree = barreRecherche.value;

    if (entree.length != 0) {
        document.tabPersonnages.forEach(function(element, index) {

            var mots = entree.split(' ');
            var estAffiche = false;

            var nom = false;
            var prenom = false;
            var nomHero = false;

            if (mots[mots.length - 1].length == 0) {
                mots.pop();
            }

            mots.forEach(mot => {
                if (mot.length != 0) {

                    if (!nom && element.nom.toLowerCase().includes(mot.toLowerCase())) {
                        nom = true;
                    }

                    if (!prenom && element.prenom.toLowerCase().includes(mot.toLowerCase())) {
                        prenom = true;
                    }

                    if (!nomHero && element.nomHero.toLowerCase().includes(mot.toLowerCase())) {
                        nomHero = true;

                    }

                    switch (mots.length) {
                        case 1:
                            if (nomHero || prenom || nom) {
                                estAffiche = true;
                            }
                            break;
                        case 2:
                            if (nom && prenom || nom && nomHero || prenom && nomHero) {
                                estAffiche = true;
                            }
                            break;
                        case 3:
                            if (nom && prenom && nomHero) {
                                estAffiche = true;
                            }
                            break;
                        default:
                            estAffiche = false;
                            break;
                    }
                }
            });

            if (estAffiche) {
                document.getElementById("personnage_" + index).style.display = "block";
            } else {
                document.getElementById("personnage_" + index).style.display = "none";
            }
        });
    } else {
        document.tabPersonnages.forEach(function(element, index) {
            document.getElementById("personnage_" + index).style.display = "none";
        })
    }
}
/**
 * Remplit le tableau avec tous les personnages
 */
function remplirTableauPersonnages(div) {
    document.tabPersonnages.forEach(function(element, index) {

        var personnage = document.createElement("div");
        personnage.id = "personnage_" + index;

        personnage.innerHTML = '<img src="' + element.photo + '" alt="' + element.toString() + '">'
        personnage.innerHTML += '<a href="detailPersonnage.html">' + element.toString() + "</a>";

        personnage.style.display = "none";

        affichage.appendChild(personnage);

    });
}

remplirTableauPersonnages(affichage);

barreRecherche.addEventListener("keyup", rechercher); /* rajoute l'évenement sur la barre de recherche */