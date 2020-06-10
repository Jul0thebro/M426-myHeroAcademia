// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Tableau qui contient tous les personnages avec toutes les informations nécessaires
// Version   :   1.0, 20.04.2020, LR, version initiale

var idPersonnage = 0;// Permet d'attribuer à chaque personne un identifiant unique

/**
 * Crée un personnage
 */
class Personnage {
    /**
     * 
     * @param {String} photo nom de la photo exemple : deku.png
     * @param {String} nom nom de famill du personnage
     * @param {String} prenom prénom du personnage
     * @param {String} nomHero nom du héro, peut être nul
     * @param {Number} age âge du personnage
     * @param {String} alter contient le nom de l'alter : la description, peut être nul
     * @param {String} metier nom du métier de la personne / petite description
     * @param {String} histoire Histoire du personange
     * @param {Episode} episode Contient la première apparition du personnage : [saison][episode]
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
        this.estLimiteAge = false;
        this.id = idPersonnage++;
    }

    /**
     * Renvoie des informations du personnage sous forme de liste séparée par des ";"
     */
    toString() {
        return this.photo + ";" + this.nom + ";" + this.prenom + ";" + this.nomHero + ";" + this.age + ";" + this.alter + ";" + this.metier + ";" + this.histoire + ";" + this.episode;
    }

    /**
     * Ecrit le prénom du personnage, son nom et son nom de héro
     */
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
    new Personnage("classe-1-a/izuku.png", "Midoriya", "Izuku", "Deku", 15, "One For All", "Héro", "A remplir", tabEpisodes[1][1], [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/bakugo.png", "Katsuki", "Bakugo", "", 15, "Explosion", "Héro", "A remplir", tabEpisodes[1][1], [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/allmight.png", "Toshinori", "Yagi", "All Might", 50, "One For All", "Héro Pro", "A remplir", tabEpisodes[1][1], [TAG_SEXE.HOMME]),
    new Personnage("hero-pro/kamui-woods-dieu-sylvestre.png", "Shinji", "Nishiya", "Le dieu Sylvestre", "Inconnu", "Bois", "Héro Pro", tabEpisodes[1][1], tabEpisodes[1][1], [TAG_SEXE.HOMME]),
    new Personnage("parents/inko.png", "Midoriya", "Inko", "", "Inconnu", "Télékinésie légère", "Inconnu", "A remplir", tabEpisodes[1][1], [TAG_SEXE.FEMME]),
    new Personnage("hero-pro/bare-handeath.png", "?", "Desutegoro", "Bare Handeath", "Inconnu", "Inconnu", "Héro Pro", "A remplir", tabEpisodes[1][1], [TAG_SEXE.HOMME]),
    new Personnage("hero-pro/mount-lady.png", "Yu", "Takeyama", "Mount Lady", 23, "Gigantisme", "Héro Pro", "A remplir", tabEpisodes[1][1], [TAG_SEXE.FEMME]),
    new Personnage("hero-pro/backdraft.png", "?", "Bakkudorafuto", "Backdraft", "Inconnu", "Eau", "Héro Pro", "A remplir", tabEpisodes[1][1], [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/hizashi.png", "Hizashi", "Yamada", "Present Mic", 30, "Voix", "Héro Professeur", "A remplir", tabEpisodes[1][3], [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/ochaco.png", "Uraraka", "Ochaco", "Uravity", 15, "Zéro Gravity", "Apprentie héro", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("classe-1-a/tenya.png", "Ida", "Tenya", "", 15, "Moteur/Engine", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("staff-ua/nezu.png", "?", "Nezu", "Proviseur", "Inconnu", "Haute Performance", "Proviseur UA", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/ectoplasm.png", "?", "Ekutopurazmu", "Ectoplasm", 41, "Clonage", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/ken-ishiyama.png", "Ken", "Ishiyama", "Cementos", "Inconnu", "Ciment", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/yuga.png", "Aoyama", "Yuga", "Shining Hero", 15, "Nombril Laser", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("staff-ua/recovery-girl.png", "Shuzenji", "Chiyo", "Recovery Girl", "Inconnu", "Récupération", "Infirmière", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("staff-ua/power-loader.png", "Maijima", "Higari", "Power Loader", 41, "Ongle d'acier", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/aizawa.png", "Shota", "Aizawa", "Eraser Head", 30, "Effacement", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-b/sekijiro.png", "Sekijiro", "Kan", "Vlad King", 30, "Manipulation du sang", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/mina.png", "Ashido", "Mina", "Pinkie", 15, "Acide", "Apprentie héro", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("classe-1-a/tsuyu.png", "Tsuyu", "Asuyu", "Froppy", 15, "Grenouille", "Apprentie héro", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("classe-1-a/denki.png", "Kaminari", "Denki", "Chargéclair", 15, "Électricité", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("staff-ua/snipe.png", "?", "Sunaipu", "Snipe", "Inconnu", "Tête chercheuse", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/mashirao.png", "Mashirao", "Ojiro", "Tail-man", 15, "Queue", "Apprentie héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/eijiro.png", "Kirishima", "Eijiro", "Red Riot", 15, "Durcissement", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/nemuri.png", "Kayama", "Nemuri", "Midnight", 31, "Parfum soporifique", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("classe-1-a/koji.png", "Koji", "Koda", "Anima", 15, "La voix du vivant", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/rikido.png", "Rikido", "Sato", "Sugar Man", 15, "Sugar Dope", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/mezo.png", "Mezo", "Shoji", "Tentapoulpe", 15, "Bras cloneur", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/kyoka.png", "Jiro", "Kyoka", "L'héroïne audio", 15, "Earphone Jack", "Apprentie héro", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("classe-1-a/hanta.png", "Hanta", "Sero", "Cellophane", 15, "Ruban adhésif", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("alliance-villain-associe/kurogiri.png", "?", "Kurogiri", "", "Inconnu", "Portail", "Villain", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/fumikage.png", "Tokoyami", "Fumikage", "Tsukuyomi", 15, "Dark Shadow", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/shoto.png", "Todoroki", "Shoto", "", 15, "Glace et feu", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/toru.png", "Hagakure", "Toru", "Invisible girl", 15, "Invisibilité", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("alliance-villain-associe/nomu1.png", "Noir", "Brainless", "", "Inconnu", "Super régénération/Absorption des chocs", "Villain", "A remplir", "A remplir", [TAG_SEXE.INDETERMINE]),
    new Personnage("classe-1-a/minoru.png", "Minoru", "Mineta", "Grape Juice", 15, "Boing Boing", "Apprentie héro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("classe-1-a/momo.png", "Yaoyorozu", "Momo", "Creaty", 15, "Création", "Apprenti héro", "A remplir", "A remplir", [TAG_SEXE.FEMME]),
    new Personnage("staff-ua/lunch-rush.png", "?", "Ranchi-Rasshu", "Lunch Rush", "Inconnu", "Inconnu", "Cuisiner", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("alliance-villain-associe/shigaraki.png", "Tomura", "Shigaraki", "?", 20, "Désintégration", "villain", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("hero-pro/tensei-lida.png", "Ida", "Tensei", "Ingenium", "Inconnu", "Moteur", "Héro pro", "A remplir", "A remplir", [TAG_SEXE.HOMME]),
    new Personnage("staff-ua/numero-13.png", "Ju-san go", "Supesu Hiro", "Numero 13", 28, "Trou noir", "Héro Professeur", "A remplir", "A remplir", [TAG_SEXE.HOMME])
]

var tabPersonnagesOriginal = tabPersonnages.slice();