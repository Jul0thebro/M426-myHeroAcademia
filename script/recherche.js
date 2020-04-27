// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Système qui permet de rechercher un personnage
// Version   :   1.0, 27.04.2020, LR, version initiale


// Création des variables
var barreRecherche = document.getElementById("barreRecherche"); // Input de la barre de recherche
var affichage = document.getElementById("listePersonnages"); // Div dans laquelle est affiché le lien vers le personnage

function rechercher() {
    var entree = barreRecherche.value;

    if (entree.length != 0) {
        document.tabPersonnages.forEach(function(element, index) {
            if (element.nom.toLowerCase().includes(entree.toLowerCase()) ||
                element.prenom.toLowerCase().includes(entree.toLowerCase()) ||
                element.nomHero.toLowerCase().includes(entree.toLowerCase())) {

                var personnage = document.createElement("div");
                personnage.indexPersonnage = index;

                personnage.innerHTML = '<img src="' + element.photo + ' alt="' + element.toString() + '"">'
                personnage.innerHTML += '<a href="personnage.html">' + element.toString() + "</a>";

                localStorage.setItem("indexPersonnage", personnage.indexPersonnage);

                affichage.appendChild(personnage);
            }
        });
    }
}

barreRecherche.addEventListener("keypress", rechercher); /* rajoute l'évenement sur la arre de recherche */