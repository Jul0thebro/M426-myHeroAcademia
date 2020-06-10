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
 * Remplit le tableau avec tous les personnages
 */
function remplirTableauPersonnages(div, tableau) {

    div.innerHTML = "";

    tableau.forEach(function (element, index) {

        var lien = document.createElement("a");
        var personnage = document.createElement("div");

        lien.href = "personnage.html";
        lien.addEventListener("click", function () { changerPage("idPersonnageChoisi", tabPersonnages[index].id) })

        if(element.estLimiteAge){
            var limiteAge = document.createElement("h3");
            limiteAge.innerHTML = "Age inconnu ↴";
            element.estLimiteAge = false;
            div.appendChild(limiteAge);
        }

        div.appendChild(lien);

        personnage.id = "personnage_" + index;



        personnage.estDansFiltre = true;

        personnage.innerHTML = '<img src="' + element.photo + '" alt="' + element.ecrireNom() + '">'
        personnage.innerHTML += "<span>" + element.ecrireNom() + "</span>";

        personnage.style.display = "block";

        lien.appendChild(personnage);
    });
}