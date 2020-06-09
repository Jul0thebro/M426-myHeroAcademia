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
function rechercher(tableau) {
    var entree = barreRecherche.value;

    if (entree.length != 0) {

        // viderTableauPersonnagesAffiches()

        tableau.forEach(function (element, index) {

            // var mots = entree.split(' ');
            var estAffiche = false;

            // var nom = false;
            // var prenom = false;
            // var nomHero = false;

            // if (mots[mots.length - 1].length == 0) {
            //     mots.pop();
            // }

            // mots.forEach(mot => {
            //     if (mot.length != 0) {

            //         if (!nom && element.nom.toLowerCase().includes(mot.toLowerCase())) {
            //             nom = true;
            //         }

            //         if (!prenom && element.prenom.toLowerCase().includes(mot.toLowerCase())) {
            //             prenom = true;
            //         }

            //         if (!nomHero && element.nomHero.toLowerCase().includes(mot.toLowerCase())) {
            //             nomHero = true;

            //         }

            //         switch (mots.length) {
            //             case 1:
            //                 if (nomHero || prenom || nom) {
            //                     estAffiche = true;
            //                 }
            //                 break;
            //             case 2:
            //                 if (nom && prenom || nom && nomHero || prenom && nomHero) {
            //                     estAffiche = true;
            //                 }
            //                 break;
            //             case 3:
            //                 if (nom && prenom && nomHero) {
            //                     estAffiche = true;
            //                 }
            //                 break;
            //             default:
            //                 estAffiche = false;
            //                 break;
            //         }
            //     }
            // });

            if (element.ecrireNom().toLowerCase().indexOf(entree.toLowerCase()) > -1) {
                estAffiche = true;
            } else {
                estAffiche = false;
            }

            if (estAffiche && document.getElementById("personnage_" + index).estDansFiltre) {
                document.getElementById("personnage_" + index).style.display = "block";
            } else {
                document.getElementById("personnage_" + index).style.display = "none";
            }
        });
    } else {
        tableau.forEach(function (element, index) {
            if (document.getElementById("personnage_" + index).estDansFiltre) {
                document.getElementById("personnage_" + index).style.display = "block";
            } else {
                document.getElementById("personnage_" + index).style.display = "none";
            }
        });
    }
}
/**
 * Remplit le tableau avec tous les personnages
 */
function remplirTableauPersonnages(div, tableau) {

    div.innerHTML = "";

    tableau.forEach(function (element, index) {

        var lien = document.createElement("a");
        var personnage = document.createElement("div");

        lien.href = "personnage.html";
        lien.addEventListener("click", function () { changerPage(tabPersonnages[index]) })

        if(element.estLimiteAge){
            var limiteAge = document.createElement("h3");
            limiteAge.innerHTML = "Age inconnu ↴";
            element.estLimiteAge = false;
            div.appendChild(limiteAge);
        }

        div.appendChild(lien);

        personnage.id = "personnage_" + index;



        personnage.estDansFiltre = true;

        personnage.innerHTML = '<img src="' + element.photo + '" alt="' + element.ecrireNom() + '">'
        personnage.innerHTML += "<span>" + element.ecrireNom() + "</span>";

        personnage.style.display = "block";

        lien.appendChild(personnage);
    });
}


/**
 * Permet de mettre les données dans le local storage pour afficher la bonne page de personnage
 * @param {Personnage} personnageChoisi Personnage que l'utilisateur a choisi
 */
function changerPage(personnageChoisi) {
    localStorage.setItem("personnageChoisi", personnageChoisi);
}

remplirTableauPersonnages(affichage, tabPersonnages);
rechercher(tabPersonnages);

barreRecherche.addEventListener("keyup", function () { rechercher(tabPersonnages) }); /* rajoute l'évenement sur la barre de recherche */