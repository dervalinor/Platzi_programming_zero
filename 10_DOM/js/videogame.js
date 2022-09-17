function startgame(){
  let buttonPet;//the second word in uppercase letter
  buttonPet = document.getElementById('boton-pets');
  //Now we can listen the events of this elements (like a click)
  //event click and indicate an action as a function
  buttonPet.addEventListener('click', selectionPetPlayer);
 
}

function know_pet(a, b, c){

  let your_pet;
  let petHipodoge = document.getElementById(a);
  let petCapipepo = document.getElementById(b);
  let petRatigueya = document.getElementById(c);

  if(petHipodoge.checked){//document.getElementById(a).checked == true is the same document.getElementById(a).checked
    your_pet = "you selected Hipodoge";
  } else if(petCapipepo.checked){
    your_pet = "you selected Capipepo";
  } else if(petRatigueya.checked){
    your_pet = "you selected Ratigueya";
  } else {
    your_pet = "Please, select your pet";
  }

  return your_pet;
}

function selectionPetPlayer(){
  //this message only appears when the user has selected their pet
  //We must know which pet the user selected.

  let pet1 = 'hipodoge', pet2 = 'capipepo', pet3 = 'ratigueya';

  let pet = know_pet(pet1, pet2, pet3);

  alert(pet);
}

//Now we are goint to select elements of html
//with javascript and we will know when a user 
//give click in a button

//selection of pets

//listen event when the website load entire

window.addEventListener('load', startgame); //listener of the browser

//we can checked if the user select a pet with document.getElementById('Any_id').checked
