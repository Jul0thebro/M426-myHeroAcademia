// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Tableau qui contient tous les personnages avec toutes les informations nécessaires
// Version   :   1.0, 20.04.2020, LR, version initiale


/**
 * Crée un personnage
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
     * @param {Array} episode Contient la première apparition du personnage : [saison, episode]
     */
    constructor(photo, nom, prenom, nomHero, age, alter, metier, histoire, episode) {
        this.photo = "resources/personnages/" + photo;
        this.nom = nom;
        this.prenom = prenom;
        this.nomHero = nomHero;
        this.age = age;
        this.alter = alter;
        this.metier = metier;
        this.histoire = histoire;
        this.episode = episode;
    }

    toString() {
        return this.photo + ";" + this.nom  + ";" +this.prenom + ";" + this.nomHero + ";" + this.age + ";" + this.alter + ";" + this.metier + ";" + this.histoire + ";" + this.episode;
    }

    ecrireNom() { 
        return  this.prenom + " " + this.nom + " " + this.nomHero;
    }
}

var tabPersonnages = [
    new Personnage("classe-1-a/izuku.png", "Midoriya", "Izuku", "Deku", 16, "One For All", "Héro", "A remplir", "A remplir"),
    new Personnage("classe-1-a/bakugo.png", "Katsuki", "Bakugo", "", 16, "A remplir", "Héro", "A remplir", "A remplir"),
    new Personnage("classe-1-a/allmight.png", "Toshinori", "Yagi", "All Might", 50, "One For All", "Héro Pro", "A remplir", "A remplir"),
    new Personnage("classe-1-a/allmight.png", "Toshinori", "Yagi", "All Might", 50, "One For All", "Héro Pro", "A remplir", "A remplir")
]

document.tabPersonnages = tabPersonnages;
document.tabPersonnagesOriginal = tabPersonnages.slice();