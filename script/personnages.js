// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Tableau qui contient tous les personnages avec toutes les informations nécessaires
// Version   :   1.0, 14.01.2019, LR, version initiale

var indexAuto = -1;

/**
    * Créer un personnage
    *
    * @param string photo, nom de la photo
    * @param string nom, nom de famille du personnage
    * @param string prenom, prenom du personnage
    * @param string nomHero, nom du héro, peut être nul
    * @param int age, age du personnage
    * @param string alter, contient le nom de l'alter : la description
    * @param string metier, nom du métier de la personne
    * @param array Contient la saison et le numéro de l'épisode pour chaque épisode
    */
class Personnage {
    /**
     * 
     * @param {string} photo nom de la photo exemple : deku.png
     * @param {string} nom nom de famill du personnage
     * @param {string} prenom prénom du personnage
     * @param {string} nomHero nom du héro, peut être nul
     * @param {int} age âge du personnage
     * @param {string} alter contient le nom de l'alter : la description, peut être nul
     * @param {string} metier nom du métier de la personne / petite description
     * @param {string} histoire Histoire du personange
     * @param {array of array} episodes Contient tous les épisodes dans lesquells apparait le personnage sous cette forme : [saison, episode]
     */
    constructor(photo, nom, prenom, nomHero, age, alter, metier, histoire, episodes) {
        this.photo = "../Resources/images" + photo;
        this.nom = nom;
        this.prenom = prenom;
        this.nomHero = nomHero;
        this.age = age;
        this.alter = alter;
        this.metier = metier;
        this.histoire = histoire;
        this.episodes = episodes;
        this.index = indexAuto++;
    }
}

var personnages = [
    new Personnage(),
    new Personnage()
]