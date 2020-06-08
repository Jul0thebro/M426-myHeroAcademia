// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Système de tri
// Version   :   1.0, 20.04.2020, LR, version initiale

const NOM_CLASSE_CHECKBOX_TRI = "checkboxTri";

/**
 * Trie les âges de manière croissante
 * @param {array of Personnage} values valeurs des âges
 */
function triAgeCroissant(values) {
    var isSorted = true;

    do {
        isSorted = true;
        for (let index = 0; index < values.length - 1; index++) {
            
            if (values[index].age > values[index + 1].age) {

                echangerValue(values, index);

                isSorted = false;
            }
        }
    } while (isSorted == false)

    return values;
}

/**
 * Trie les âges de manière décroissante
 * @param {array of Personnage} values valeurs des âges
 */
function triAgeDecroissant(values) {
    var isSorted = true;

    do {
        isSorted = true;
        for (let index = 0; index < values.length - 1; index++) {
            if (values[index].age < values[index + 1].age) {

                echangerValue(values, index);

                isSorted = false;
            }
        }
    } while (isSorted == false)

    return values;
}

/**
 * Trie les personnages dans l'ordre alphabétique
 * @param {array of Personnage} values 
 */
function triOrdreAlphabetique(values) {
    var isSorted = true;

    do {
        isSorted = true;
        for (let index = 0; index < values.length - 1; index++) {
            if (values[index].prenom.localeCompare(values[index + 1].prenom) == 1) {

                echangerValue(values, index);

                isSorted = false;
            }
        }
    } while (isSorted == false)

    return values;
}

/**
 * Trie les personnages dans l'ordre alphabétique inverse
 * @param {array of Personnage} values 
 */
function triOrdreAlphabetiqueInverse(values) {
    var isSorted = true;

    do {
        isSorted = true;
        for (let index = 0; index < values.length - 1; index++) {
            if (values[index].prenom.localeCompare(values[index + 1].prenom) == -1) {

                echangerValue(values, index);

                isSorted = false;
            }
        }
    } while (isSorted == false)

    return values;
}

/**
 * Permet d'interchanger deux entrées de tableau consécutif à aprtir d'un index donné
 * @param {array} tableau tableau qui contient les deux valeurs à changer
 * @param {Int} index index auquel commence l'échange
 */
function echangerValue(tableau, index) {
    var temp = tableau[index + 1]
    tableau[index + 1] = tableau[index];
    tableau[index] = temp;
}

function effectuerTri(checkboxs) {
    tabPersonnages = tabPersonnagesOriginal.slice();

    // Boutons de tri pou l0ordre alphabétique
    if (checkboxs[0].checked == true) {
        tabPersonnages = triOrdreAlphabetique(tabPersonnages.slice());
    } else if (checkboxs[1].checked == true) {
        tabPersonnages = triOrdreAlphabetiqueInverse(tabPersonnages.slice());
    }

    if (checkboxs[2].checked == true) {
        tabPersonnages = triAgeCroissant(tabPersonnages.slice());
    } else if (checkboxs[3].checked == true) {
        tabPersonnages = triAgeDecroissant(tabPersonnages.slice());
    }
}

/**
 * Désactive les autres checkbox du même type
 * @param {Event} e valeur par rapport à ce qui a appelé l'évenement
 * @param {int} indexCheckbox le numéro de la checkbox, permet de la retrouver dans le tableau des checkbox du même nom
 */
function activerCheckbox(e, indexCheckbox) {
    var allCheckboxs = document.getElementsByClassName(NOM_CLASSE_CHECKBOX_TRI);
    var checkboxs = document.getElementsByName(e.target.name);

    checkboxs.forEach(function (element, index) {
        if (index != indexCheckbox) {
            element.checked = false;
        }
    });

    effectuerTri(allCheckboxs);
    remplirTableauPersonnages(affichage, tabPersonnages);
    appuyerFiltre();
    rechercher(tabPersonnages);
}