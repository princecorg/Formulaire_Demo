// Association des éléments du DOM à des variables
let nom = document.getElementById("nom"); // input nom
let prenom = document.getElementById("prenom"); // input prenom
let objet = document.getElementById("objet"); // select
let commentaire = document.getElementById("commentaire"); //textarea
let rgpd = document.getElementById("rgpd"); // case à cocher
let button = document.getElementById("soumettre");

//Gestion du click sur le bouton
button.addEventListener('click',traiterFormulaire);

function traiterFormulaire() {
    alert('coucou');
}