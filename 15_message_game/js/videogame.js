/*
Create a message in the document html about the power of the player and 
the enemy and indicate the winner

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
  //show the player attack
  //No use innerHTML, it is best Document.createElement - create 
  //elements in HTML by tagNAme
  //show the enemy attack
  attackingRandom()
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
  
  //message of enemy power
  showEnemyPower();
}

function showPowerEnemy(){
  //here we use the method of manipulate DOM document.createElement() 
  let message_power = document.createElement('p'); //tag name of the element html
  // remember that symbol "+" for concatenate elements
  message_power.innerHTML = "Your pet attack with " + attackingPlayer + ", your enemy pet attack with " + attackingEnemy +  ", then your won";//add new content to the element html
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
