// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Système de tri
// Version   :   1.0, 20.04.2020, LR, version initiale

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
                var temp = values[index + 1];
                values[index + 1] = values[index];
                values[index] = temp;

                isSorted = false;
            }
        }
    } while (isSorted == false)

    return values;
}

/**
 * Trie les âges de manière décroissante
 * @param {array} values valeurs des âges
 */
function triAgeDecroissant(values) {
    var isSorted = true;

    do {
        isSorted = true;
        for (let index = 0; index < values.length - 1; index++) {
            if (values[index].age < values[index + 1].age) {
                var temp = values[index + 1];
                values[index + 1] = values[index];
                values[index] = temp;

                isSorted = false;
            }
        }
    } while (isSorted == false)

    return values;
}

/**
 * Désactive les autres checkbox du même type
 * @param {Event} e valeur par rapport à ce qui a appelé l'évenement
 * @param {int} indexCheckbox le numéro de la checkbox, permet de la retrouver dans le tableau des checkbox du même nom
 */
function activerCheckbox(e, indexCheckbox, numeroTri) {
    var checkboxs = document.getElementsByName(e.target.name);

    checkboxs.forEach(function (element, index) {
        if (index != indexCheckbox) {
            element.checked = false;
        }
    });

    if (e.target.checked == true) {
        switch (numeroTri) {
            case 0:

                break;
            case 1:

                break;
            case 2:
                document.tabPersonnages = triAgeCroissant(document.tabPersonnagesOriginal.slice());
                break;
            case 3:
                document.tabPersonnages = triAgeDecroissant(document.tabPersonnagesOriginal.slice());
                break;
        }
    } else {
        document.tabPersonnages = document.tabPersonnagesOriginal.slice();
    }
    remplirTableauPersonnages(affichage, document.tabPersonnages);
    rechercher(document.tabPersonnages)
}