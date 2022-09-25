/*
create logic to indicate whether the player wins, loses or draws
  */

let attackingPlayer; 
let attackingEnemy;


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

function attackingFire(){
  attackingPlayer = "FIRE"; 
  attackingRandom();
}

function attackingWater(){
  attackingPlayer = "WATER";
  attackingRandom()
}

function attackingEarth(){
  attackingPlayer = "EARTH";
  attackingRandom()
}

function attackingRandom(){
  let power_random = selectionRandom(1, 3);
  if(power_random == 1){
   attackingEnemy = "FIRE";
  } else if(power_random == 2){
    attackingEnemy = "WATER";
  } else if(power_random == 3){
    attackingEnemy = "EARTH";
  }
  
  combat_pets();
}

function show_message(winner){
  let section_message = document.getElementById("message");
  let message_power = document.createElement('p'); 
  message_power.innerHTML = "Your pet attack with " + attackingPlayer + ", your enemy pet attack with " + attackingEnemy + winner;
  section_message.appendChild(message_power); 
}

function combat_pets(){
  //change numbers to name of powers
  //1 -> fire, 2 -> water, 3 -> fire

  //call function show_message
   if(attackingPlayer == attackingEnemy){
      show_message(" you tied");
   } else if((attackingPlayer == "FIRE" && attackingEnemy == "EARTH") || (attackingPlayer == "WATER" && attackingEnemy == "FIRE") || (attackingPlayer
   == "EARTH" && attackingEnemy == "WATER")){
      show_message(" you won");
   } else {
      show_message(" you lose");
   }
  
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
  
  selectionPetEnemy();
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
