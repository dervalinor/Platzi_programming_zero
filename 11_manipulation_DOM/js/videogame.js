//NOw we create a the counter of lifes videogame and show name of the
//pet
//RESEARCH Documentation Javascript: https://developer.mozilla.org/en-US/
//We can modify element of html with innerHTML - show the code html
//in string of the element selected - document.getElementById("myid").innerHTML
//and we can change this content of element
function startgame(){
  let buttonPet;
  buttonPet = document.getElementById('boton-pets');
  buttonPet.addEventListener('click', selectionPetPlayer);
 
}


function selectionPetPlayer(){

  let a = 'hipodoge', b = 'capipepo', c = 'ratigueya';
  let petHipodoge = document.getElementById(a);
  let petCapipepo = document.getElementById(b);
  let petRatigueya = document.getElementById(c);
  //modify the span html and put the name of pet
  let spanPetPlayer = document.getElementById("pet_player");

  if(petHipodoge.checked){
    spanPetPlayer.innerHTML = "Hipodoge";
  } else if(petCapipepo.checked){
    spanPetPlayer.innerHTML = "Capipepo";
  } else if(petRatigueya.checked){
    spanPetPlayer.innerHTML = "Ratigueya";
  } else {
    alert("Please, select your pet");
  }

}


window.addEventListener('load', startgame); 
