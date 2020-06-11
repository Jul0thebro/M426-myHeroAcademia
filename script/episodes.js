// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Contient la classe épisode et un tableau qui contient tous les épisodes
// Version   :   1.0, 09.06.2020, LR, version initiale

/**
 * Crée un épisode
 */
class Episode {
    /**
     * Initialise un épisode
     * @param {Number} numEpisode Le numéro de l'épisode
     * @param {Number} numSaison Le numéro de la saison
     * @param {string} titre Le titre de l'épisode
     */
    constructor(numEpisode, numSaison, titre) {
        this.photo = "resources/episode-mha/episode-" + numEpisode + "-saison-" + numSaison + ".jpg";
        this.numEpisode = numEpisode;
        this.numSaison = numSaison;
        this.titre = titre;
    }

    toString() {
        return this.photo + ";" + this.numSaison + ";" + this.numEpisode + ";" + this.titre;
    }

    ecrireEpisodeComplet() {
        return this.titre + " [" + this.numEpisode + "-" + this.numSaison + "]";
    }

    ecrireEpisodeAbrege() {
        return "Épisode : " + this.numEpisode + " - Saison : " + this.numSaison;
    }

    alt() {
        return "Image : " + this.ecrireEpisodeAbrege();
    }
}

// Nombres d'épisodes par saisons
const NB_EPISODES_SAISON_1 = 13;
const NB_EPISODES_SAISON_2 = 21;
const NB_EPISODES_SAISON_3 = 25;
const NB_EPISODES_SAISON_4 = 25;

// Nombre de saisons
const NB_SAISONS = 1;

// Nom des épisodes
// Saison 1
const NOM_EPISODE_1_SAISON_1 = "IZUKU MIDORIYA : LES ORIGINES";
const NOM_EPISODE_2_SAISON_1 = "LES CONDITIONS AU MÉTIER DE HÉROS";
const NOM_EPISODE_3_SAISON_1 = "LE GRONDEMENT DES MUSCLES";
const NOM_EPISODE_4_SAISON_1 = "LA LIGNE DE DÉPART";
const NOM_EPISODE_5_SAISON_1 = "MES CAPACITÉS ACTUELLES";
const NOM_EPISODE_6_SAISON_1 = "DÉCHAÎNE-TOI, MAUDIT NERD";
const NOM_EPISODE_7_SAISON_1 = "DEKU CONTRE KATCHAN";
const NOM_EPISODE_8_SAISON_1 = "KATSUKI SUR LA LIGNE DE DÉPART";
const NOM_EPISODE_9_SAISON_1 = "FONCE, TENYA !";
const NOM_EPISODE_10_SAISON_1 = "RENCONTRE AVEC L'INCONNU";
const NOM_EPISODE_11_SAISON_1 = "GAME OVER";
const NOM_EPISODE_12_SAISON_1 = "ALL MIGHT";
const NOM_EPISODE_13_SAISON_1 = "DANS LE CŒUR DE CHACUN";

// Saison 2
const NOM_EPISODE_1_SAISON_2 = "";
const NOM_EPISODE_2_SAISON_2 = "";
const NOM_EPISODE_3_SAISON_2 = "";
const NOM_EPISODE_4_SAISON_2 = "";
const NOM_EPISODE_5_SAISON_2 = "";
const NOM_EPISODE_6_SAISON_2 = "";
const NOM_EPISODE_7_SAISON_2 = "";
const NOM_EPISODE_8_SAISON_2 = "";
const NOM_EPISODE_9_SAISON_2 = "";
const NOM_EPISODE_10_SAISON_2 = "";
const NOM_EPISODE_11_SAISON_2 = "";
const NOM_EPISODE_12_SAISON_2 = "";
const NOM_EPISODE_13_SAISON_2 = "";
const NOM_EPISODE_14_SAISON_2 = "";
const NOM_EPISODE_15_SAISON_2 = "";
const NOM_EPISODE_16_SAISON_2 = "";
const NOM_EPISODE_17_SAISON_2 = "";
const NOM_EPISODE_18_SAISON_2 = "";
const NOM_EPISODE_19_SAISON_2 = "";
const NOM_EPISODE_20_SAISON_2 = "";
const NOM_EPISODE_21_SAISON_2 = "";

// Saison 3
const NOM_EPISODE_1_SAISON_3 = "";
const NOM_EPISODE_2_SAISON_3 = "";
const NOM_EPISODE_3_SAISON_3 = "";
const NOM_EPISODE_4_SAISON_3 = "";
const NOM_EPISODE_5_SAISON_3 = "";
const NOM_EPISODE_6_SAISON_3 = "";
const NOM_EPISODE_7_SAISON_3 = "";
const NOM_EPISODE_8_SAISON_3 = "";
const NOM_EPISODE_9_SAISON_3 = "";
const NOM_EPISODE_10_SAISON_3 = "";
const NOM_EPISODE_11_SAISON_3 = "";
const NOM_EPISODE_12_SAISON_3 = "";
const NOM_EPISODE_13_SAISON_3 = "";
const NOM_EPISODE_14_SAISON_3 = "";
const NOM_EPISODE_15_SAISON_3 = "";
const NOM_EPISODE_16_SAISON_3 = "";
const NOM_EPISODE_17_SAISON_3 = "";
const NOM_EPISODE_18_SAISON_3 = "";
const NOM_EPISODE_19_SAISON_3 = "";
const NOM_EPISODE_20_SAISON_3 = "";
const NOM_EPISODE_21_SAISON_3 = "";
const NOM_EPISODE_22_SAISON_3 = "";
const NOM_EPISODE_23_SAISON_3 = "";
const NOM_EPISODE_24_SAISON_3 = "";
const NOM_EPISODE_25_SAISON_3 = "";

// Saison 4
const NOM_EPISODE_1_SAISON_4 = "";
const NOM_EPISODE_2_SAISON_4 = "";
const NOM_EPISODE_3_SAISON_4 = "";
const NOM_EPISODE_4_SAISON_4 = "";
const NOM_EPISODE_5_SAISON_4 = "";
const NOM_EPISODE_6_SAISON_4 = "";
const NOM_EPISODE_7_SAISON_4 = "";
const NOM_EPISODE_8_SAISON_4 = "";
const NOM_EPISODE_9_SAISON_4 = "";
const NOM_EPISODE_10_SAISON_4 = "";
const NOM_EPISODE_11_SAISON_4 = "";
const NOM_EPISODE_12_SAISON_4 = "";
const NOM_EPISODE_13_SAISON_4 = "";
const NOM_EPISODE_14_SAISON_4 = "";
const NOM_EPISODE_15_SAISON_4 = "";
const NOM_EPISODE_16_SAISON_4 = "";
const NOM_EPISODE_17_SAISON_4 = "";
const NOM_EPISODE_18_SAISON_4 = "";
const NOM_EPISODE_19_SAISON_4 = "";
const NOM_EPISODE_20_SAISON_4 = "";
const NOM_EPISODE_21_SAISON_4 = "";
const NOM_EPISODE_22_SAISON_4 = "";
const NOM_EPISODE_23_SAISON_4 = "";
const NOM_EPISODE_24_SAISON_4 = "";
const NOM_EPISODE_25_SAISON_4 = "";

// Crée le tableau des épisodes
var tabEpisodes = new Object();

// Rempli le tableau des épisodes
for (let numSaison = 1; numSaison <= NB_SAISONS; numSaison++) {
    tabEpisodes[numSaison] = new Object();

    for (let numEpisode = 1; numEpisode <= eval("NB_EPISODES_SAISON_" + numSaison); numEpisode++) {
        var episode = new Episode(numEpisode, numSaison, eval("NOM_EPISODE_" + numEpisode + "_SAISON_" + numSaison));
        tabEpisodes[numSaison][numEpisode] = episode;
    }
}