// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Système de tri
// Version   :   1.0, 20.04.2020, LR, version initiale

/**
 * Trie les âges de manière croissante
 * @param {array} values valeurs des âges
 */
function triAgeCroissant(values) {
    var isSorted = true;

    do {
        isSorted = true;
        for (let index = 0; index < values.length - 1; index++) {
            if (values[index] > values[index + 1]) {
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
            if (values[index] < values[index + 1]) {
                var temp = values[index + 1];
                values[index + 1] = values[index];
                values[index] = temp;

                isSorted = false;
            }
        }
    } while (isSorted == false)

    return values;
}