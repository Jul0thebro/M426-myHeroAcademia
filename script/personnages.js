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
     * @param {Array} tags contient tous les tags qui permettent filter
     */
    constructor(photo, nom, prenom, nomHero, age, alter, metier, histoire, episode, tags) {
        this.photo = "resources/personnages/" + photo;
        this.nom = nom;
        this.prenom = prenom;
        this.nomHero = nomHero;
        this.age = age;
        this.alter = alter;
        this.metier = metier;
        this.histoire = histoire;
        this.episode = episode;
        this.tags = tags;
    }

    toString() {
        return this.photo + ";" + this.nom + ";" + this.prenom + ";" + this.nomHero + ";" + this.age + ";" + this.alter + ";" + this.metier + ";" + this.histoire + ";" + this.episode;
    }

    ecrireNom() {
        return this.prenom + " " + this.nom + " " + this.nomHero;
    }
}

const TAG_SEXE = {
    0: "H",
    "HOMME": "H",
    1: "F",
    "FEMME": "F",
    2: "I",
    "INDETERMINE": "I"
}

var tabPersonnages = [
    new Personnage("classe-1-a/izuku.png", "Midoriya", "Izuku", "Deku", 16, "One For All", "Héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/bakugo.png", "Katsuki", "Bakugo", "", 16, "A remplir", "Héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/allmight.png", "Toshinori", "Yagi", "All Might", 50, "One For All", "Héro Pro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("hero-pro/kamui-woods-dieu-sylvestre.png", "Shinji" , "Nishiya", "Le dieu Sylvestre", "Inconnu", "Bois", "Héro Pro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("", "Midoriya", "Inko", "", "Inconnu", "Télékinésie légère", "Inconnu", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("hero-pro/bare-handeath.png", "?", "Desutegoro", "Bare Handeath", "Inconnu", "Inconnu", "Héro Pro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("hero-pro/mount-lady.png", "Yu", "Takeyama", "Mount Lady", 23, "Gigantisme", "Héro Pro", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("", "?", "Bakkudorafuto", "Backdraft", "Inconnu", "Eau", "Héro Pro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/hizashi.png", "Hizashi", "Yamada", "Present Mic", 30, "Voix", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("/classe-1-a/ochaco.png", "Uraraka", "Ochaco", "Uravity", 15, "Zéro Gravity", "Apprentie héro", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("classe-1-a/tenya.png", "Ida", "Tenya", "", 15, "Moteur/Engine", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("staff-ua/nezu.png", "?", "Nezu", "Proviseur", "Inconnu", "Haute Performance", "Proviseur UA", "A remplir", "A remplir", [TAG_SEXE.HOMME])
]

var tabPersonnagesOriginal = tabPersonnages.slice();