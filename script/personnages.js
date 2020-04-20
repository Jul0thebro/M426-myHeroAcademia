// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Tableau qui contient tous les personnages avec toutes les informations nécessaires
// Version   :   1.0, 14.01.2019, LR, version initiale


class Personnage {
    constructor(photo, nom, prenom, nomHero, age, alter, metier, histoire, episodes, saisons) {
        this.photo = photo;
        this.nom = nom;
        this.prenom = prenom;
        this.nomHero = nomHero;
        this.age = age;
        this.alter = alter;
        this.metier = metier;
        this.histoire = histoire;
        this.episodes = episodes;
        this.saisons;
    }
}

var personnages = [
    new Personnage(),
    new Personnage()
]