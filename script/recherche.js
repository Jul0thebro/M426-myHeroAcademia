// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Système qui permet de rechercher un personnage
// Version   :   1.0, 27.04.2020, LR, version initiale

// Création des variables
var barreRecherche = document.getElementById("barreRecherche");// Input de la barre de recherche
var affichage = document.getElementById("correspondance");// Div dans laquelle est affiché le lien vers le personnage

function rechercher() {
    var entree = barreRecherche.value;

    tabPersonnages.forEach(function(element, index) {
        if(element.nom.includes(entree) || element.prenom.includes(entree) || element.nomHero.includes(entree)) {
            var personnage = document.createElement("div");
            personnage.link = index;
        }
    });
   
}

barreRecherche.addEventListener("onkeydown", rechercher);