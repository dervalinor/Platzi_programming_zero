/*
create a function where we create a enemy the which select his pet random way 
*/

//Important concept: global variable, declare outside of the functions and all
//the functions can access to this variables
let attackingPlayer;

function startgame(){
  let buttonPet;
  buttonPet = document.getElementById('boton-pets');
  buttonPet.addEventListener('click', selectionPetPlayer);

  //create listener for each power
  let button_fire = document.getElementById("boton-fire");
  button_fire.addEventListener("click", attackingFire);
  let button_water = document.getElementById("boton-water");
  button_water.addEventListener("click", attackingWater);
  let button_earth = document.getElementById("boton-earth");
  button_earth.addEventListener("click", attackingEarth);
}

//now we are going to program the logic for the selection of attacking
//we will use listener according to button that the use selected and execute
//a function - attackingFire, attackingWater and attackingEarth

//declare function about types of attacking 
function attackingFire(){
  attackingPlayer = "FIRE"; 
  alert("Your attacking is " + attackingPlayer);
}

function attackingWater(){
  attackingPlayer = "WATER";
  alert("Your attacking is " + attackingPlayer);
}

function attackingEarth(){
  attackingPlayer = "EARTH";
  alert("Your attacking is " + attackingPlayer);
}



function selectionPetPlayer(){

  let a = 'hipodoge', b = 'capipepo', c = 'ratigueya';
  let petHipodoge = document.getElementById(a);
  let petCapipepo = document.getElementById(b);
  let petRatigueya = document.getElementById(c);
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
  
  selectionPetEnemy()
}

function selectionPetEnemy(){
  let random_number = selectionRandom(1, 3);
  let spanPetEnemy = document.getElementById("pet_enemy");

  if(random_number == 1){
    spanPetEnemy.innerHTML = "Hipodoge";
  } else if (random_number == 2) {
    spanPetEnemy.innerHTML = "Capipepo";
  } else if (random_number == 3){
    spanPetEnemy.innerHTML = "Ratigueya";
  }

  
}

function selectionRandom(min, max){
   return Math.floor(Math.random()*(max-min+1)+min);
}



window.addEventListener('load', startgame); 
