// Association des éléments du DOM à des variables
let nom = document.getElementById('nom') // input nom
let prenom = document.getElementById('prenom') // input prenom
let objet = document.getElementById('objet') // select
let commentaire = document.getElementById('commentaire') //textarea
let rgpd = document.getElementById('rgpd') // case à cocher
let button = document.getElementById('soumettre')
let message = document.getElementById('message')
let messageContent
let valide=false

//Gestion du click sur le bouton
button.addEventListener('click', traiterFormulaire)

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
