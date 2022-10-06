//Restart the game when someone wins the game - game restart button
//We must disable the power selection buttons and enable the restart game button - use attribute disabled 
let attackingPlayer; 
let attackingEnemy;

let lifes_player = 3;
let lifes_enemy = 3;

function startgame(){
  let buttonPet;
  buttonPet = document.getElementById('boton-pets');
  buttonPet.addEventListener('click', selectionPetPlayer);

  let button_fire = document.getElementById("boton-fire");
  button_fire.addEventListener("click", attackingFire);
  let button_water = document.getElementById("boton-water");
  button_water.addEventListener("click", attackingWater);
  let button_earth = document.getElementById("boton-earth");
  button_earth.addEventListener("click", attackingEarth);

  //select restart game button
  let reboot_button = document.getElementById("boton-reboot");
  //create an event listener
  reboot_button.addEventListener("click",reboot_game); //create the function reboot_game
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

function show_winner(winner){
  let section_message = document.getElementById("message");
  let message_power = document.createElement('p'); 
  message_power.innerHTML = "You " + winner + " the game" ;
  section_message.appendChild(message_power); 
  
  //disable all button of power
  let button_fire = document.getElementById("boton-fire");
  button_fire.disabled = true;
  let button_water = document.getElementById("boton-water");
  button_water.disabled = true;
  let button_earth = document.getElementById("boton-earth");
  button_earth.disabled = true;

}

function combat_pets(){
  let spanLifesPlayer = document.getElementById("lifes_player");
  let spanLifesEnemy = document.getElementById("lifes_enemy");


  if(lifes_player > 0 && lifes_enemy > 0){
  
    if(attackingPlayer == attackingEnemy){
      show_message(" you tied");
   } else if((attackingPlayer == "FIRE" && attackingEnemy == "EARTH") || (attackingPlayer == "WATER" && attackingEnemy == "FIRE") || (attackingPlayer
   == "EARTH" && attackingEnemy == "WATER")){
      show_message(" you won");
      lifes_enemy --;
      spanLifesEnemy.innerHTML = lifes_enemy; 
   } else {
      show_message(" you lose");
      lifes_player --;
      spanLifesPlayer.innerHTML = lifes_player;
   }


  } else if(lifes_player == 0 || lifes_enemy == 0 && stop_game == 0){
    //review player's lives and know who won
    review_lives(lifes_player, lifes_enemy);
    //here indicate reboot game
  }
   
}

function review_lives(lifes_player, lifes_enemy){
  if(lifes_enemy == 0){
    show_winner("won");
  } else if(lifes_player == 0) {
    show_winner("lose");
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

function reboot_game(){
  location.reload();//function function to reload the web page  
}

function selectionRandom(min, max){
   return Math.floor(Math.random()*(max-min+1)+min);
}


window.addEventListener('load', startgame); 
