// Projet    :   My Hero Academia
// Auteur    :   Ludovic Roux
// Desc.     :   Permet de faire certaines actions lorsqu'on arrive sur une page
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