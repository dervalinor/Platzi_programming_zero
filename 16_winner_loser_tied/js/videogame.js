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
  
  showPowerEnemy();
}

function showPowerEnemy(){
  let section_message = document.getElementById("message");
  let message_power = document.createElement('p'); 
  //insert variable or function where show whether the player wins, loses or draws
  message_power.innerHTML = "Your pet attack with " + attackingPlayer + ", your enemy pet attack with " + attackingEnemy + " and your: " + who_win();

  section_message.appendChild(message_power); 
}

//function to know if the player wins, loses or draws
function who_win(){
    //1 -> fire, 2 -> water, 3 -> earth
    //convert power to numbers
    let player = convert_power(attackingPlayer);
    let enemy = convert_power(attackingEnemy);
    let result;

   if(player == enemy){
      result = "You tied";
   } else if((player == 1 && enemy == 3) || (player == 2 && enemy == 1) || (player
   == 3 && enemy == 2)){
     result = "You won";
   } else {
     result = "You lose";
   }
  
  return result;
}

function convert_power(a){
    let fire = "FIRE", water = "WATER", earth = "EARTH";
    let power_number;
    if(a.localeCompare(fire) == 0){
      power_number = 1;
    } else if(a.localeCompare(water) == 0){
      power_number = 2;
    } else if(a.localeCompare(earth) == 0){
      power_number = 3;
    }

    return power_number;
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
