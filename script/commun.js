// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Js commun a plusieurs pages
// Version   :   1.0, 10.06.2020, LR, version initiale

 /**
  * Fait une redirection sur la page pour choisir un personnage
  * @param {String} pageCourante nom de la page sur laquelle on est
  * @param {String} pageRedirection nom de la page sur laquelle on va
  * @param {String} message message affiché dans l'alerte
  */
 function redirection(pageCourante, pageRedirection, message) {
    alerterRedirection(message);
    window.location.href = window.location.href.replace(pageCourante, pageRedirection);
}

/**
 * Fait une alerte avant la redirection
 * @param {String} message message affiché dans l'alerte
 */
function alerterRedirection(message) {
    alert(message);
}

/**
 * Permet de mettre les données dans le local storage pour afficher la bonne page de personnage
 * @param {String} itemLocalStorage nom de l'item qui a être mis dans le local storage
 * @param {Object} itemChoisi Item que l'utilisateur a choisi
 */
function changerPage(itemLocalStorage, itemChoisi) {
    localStorage.setItem(itemLocalStorage, itemChoisi);
}

/**
 * Remplit le tableau avec tous les personnages
 */
function remplirTableauPersonnages(div, tableau) {

    div.innerHTML = "";

    tableau.forEach(function (element, index) {

        var lien = document.createElement("a");
        var personnage = document.createElement("div");

        lien.href = "personnage.html";
        lien.addEventListener("click", function () { changerPage("idPersonnageChoisi", tableau[index].id) })

        if(element.estLimiteAge){
            var limiteAge = document.createElement("h3");
            limiteAge.innerHTML = "Age inconnu ↴";
            element.estLimiteAge = false;
            div.appendChild(limiteAge);
        }

        div.appendChild(lien);

        personnage.id = "element_" + index;

        personnage.estDansFiltre = true;

        personnage.innerHTML = '<img src="' + element.photo + '" alt="' + element.ecrireNom() + '">'
        personnage.innerHTML += "<span>" + element.ecrireNom() + "</span>";

        personnage.style.display = "block";

        lien.appendChild(personnage);
    });
}

/**
 * Remplit le tableau avec tous les personnages
 */
function remplirTableauEpisodes(div, tableau) {
    var saison = new Object();

    div.innerHTML = "";

    for (let indexSaison = 1; indexSaison <= NB_SAISONS; indexSaison++) {
        saison = tableau[indexSaison];
        for (let indexEpisode = 1; indexEpisode < eval("NB_EPISODES_SAISON_" + indexSaison); indexEpisode++) {
            var lien = document.createElement("a");
            var episode = document.createElement("div");
    
            lien.href = "episode.html";
            
            lien.addEventListener("click", function () { changerPage("numSaisonChoisi", indexSaison); changerPage("numEpisodeChoisi", indexEpisode)})    
    
            div.appendChild(lien);
    
            episode.id = "element_" + indexEpisode + "_" + indexSaison;
            episode.className = "divEpisode";
    
            episode.estDansFiltre = true;
    
            episode.innerHTML = '<img src="' + saison[indexEpisode].photo + '" alt="' + saison[indexEpisode].alt() + '">'
            episode.innerHTML += "<span>" + saison[indexEpisode].ecrireEpisodeComplet() + "</span>";
    
            episode.style.display = "block";
    
            lien.appendChild(episode);
        }
    }
}