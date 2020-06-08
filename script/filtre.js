// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Permet de filtrer la recherche que l'on fait
// Version   :   1.0, 07.06.2020, LR, version initiale

const NOM_CLASSE_CHECKBOX_FILTRE = "checkboxFiltre";

/**
 * Permet de faire appliquer les filtres qui sont activés
 */
function appuyerFiltre() {
    var checkboxsFiltre = document.getElementsByClassName(NOM_CLASSE_CHECKBOX_FILTRE);
    var filtresAppliques = [];

    resetEtatFiltre(tabPersonnages);

    for (let index = 0; index < checkboxsFiltre.length; index++) {
        if (checkboxsFiltre[index].checked) {
            filtresAppliques.push(TAG_SEXE[index]);
        }
    }

    if (filtresAppliques.length > 0) {
        filtrer(tabPersonnages, filtresAppliques);
    }

    rechercher(tabPersonnages);
}

/**
 * Permet de filtrer le tableau des personnages
 * @param {Array} tableauPersonnage tableau des personnage que l'on veut filtrer
 * @param {Array} filtres contient le tableau de tous les filtrs appliqués
 */
function filtrer(tableauPersonnage, filtres) {
    var estValide = false; // Indique que le personnage rentre dans les critères des filtres

    tableauPersonnage.forEach(function(personnage, index) {
        estValide = false;

        filtres.forEach(filtre => {
            if (personnage.tags.find(element => element == filtre) != null) {
                estValide = true;
            }
        });

        if (estValide) {
            document.getElementById("personnage_" + index).estDansFiltre = true;
        } else {
            document.getElementById("personnage_" + index).estDansFiltre = false;
        }

    });
}

/**
 * Remet la variable indiquant si le personnage est dans le filtre à zéro
 * @param {Array} tableauPersonnage tableau des personnages
 */
function resetEtatFiltre(tableauPersonnage) {
    for (index = 0; index < tableauPersonnage.length; index++) {
        document.getElementById("personnage_" + index).estDansFiltre = true;
    }
}