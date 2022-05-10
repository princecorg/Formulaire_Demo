// Association des éléments du DOM à des variables
let nom = document.getElementById('nom') // input nom
let prenom = document.getElementById('prenom') // input prenom
let objet = document.getElementById('objet') // select
let commentaire = document.getElementById('commentaire') //textarea
let rgpd = document.getElementById('rgpd') // case à cocher
let button = document.getElementById('soumettre')
let message = document.getElementById('message')

// Variables déclarées
let messageContent
let valide=false

//Tableau de mots à exclure ("gros mots")
let motsProscrits = ["idiot","navet","pourri","arnaqueur"]

//Gestion du click sur le bouton
button.addEventListener('click', traiterFormulaire)

//fonction qui contrôle que les champs ne sont pas vides
function traiterFormulaire () {
  let nomVal = nom.value
  let prenomVal = prenom.value
  let objetVal = objet.value
  let commentaireVal = commentaire.value

  if (nomVal === '') {
    messageContent = 'Le champ nom est vide'
    genererMessage(messageContent)
  } else if (prenomVal === '') {
    messageContent = 'Le champ prénom est vide'
    genererMessage(messageContent)
  } else if (objetVal === '0') {
    messageContent = "Vous n'avez pas sélectionné d'objet"
    genererMessage(messageContent)
  } else if (commentaireVal === '') {
    messageContent = "Vous n'avez pas saisi de message"
    genererMessage(messageContent)
  } else {
    if (!rgpd.checked){ 
      messageContent = 'La validation du RGPD est obligatoire'
      genererMessage(messageContent)
    } else {
        messageContent = 'Votre formulaire a été envoyé'
    valide = true
    genererMessage(messageContent)
    }
  }
}
// fonction qui gère l'attribution d'une classe à l'élément message
function genererMessage (messageContent) {
  message.textContent = messageContent  
  if (valide) {
    message.classList.add('success')
    message.classList.remove('error')
    message.style.display ='block'
  } else {
    message.classList.add('error')
    message.classList.remove('success')
    message.style.display='block'
  }
}
//Gestion de la saisie dans le Textarea
commentaire.addEventListener('keyup',controlerTexte)

// fonction qui contrôle la présence de mots non autorisés (les "gros mots")
function controlerTexte() {
  let contenuCommentaire = commentaire.value
  // boucle pour contrôler la présence de chaque mot dans la chaîne de caractères
  for (i = 0; i<motsProscrits.length; i++) {
    if(contenuCommentaire.includes(motsProscrits[i])){
      alert (`le mot ${motsProscrits[i]} n\'est pas autorisé ici !`)
      //supprimer uniquement le mot proscrit du Textarea
      let motRetire = motsProscrits[i].length
      commentaire.value = contenuCommentaire.substr(0,motRetire)
    }
  }
}