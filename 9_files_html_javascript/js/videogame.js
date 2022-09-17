
      function random_pc(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
      }

       function choise(n){

        let m;

        if(n == 1){
          m = " chose stone";
        } else if(n == 2){
          m = " chose paper";
        } else if(n == 3){
          m = " chose scissors";
        } else {
          m = " no exist this option";
        }

        return m;

      }

      function who_won(n, m){
        
        let result = 0;

         if(n == m){
           result = 0;
        } else if((n == 1 && m == 3) || (n == 2 && m == 1) || (n
        == 3 && m == 2)){
          result = 1;
        } else {
          result = 2;
        }

        return result;
       
      }

      let player = 0;
      let pc = 0;      
      let victories = 0; 
      let defeats = 0;   

      while(victories < 3 && defeats < 3){       
        pc = random_pc(1, 3);        
        player = prompt("1. stone, 2. paper, 3. scissors. Choose: ");

        alert("You" + choise(player));
        alert("Pc" + choise(pc));


        if(who_won(player, pc) == 0){
          alert("You tied");
        } else if(who_won(player, pc) == 1){
          alert("You won");
          victories++; 
        } else if(who_won(player, pc) == 2){
          alert("You lose");  
          defeats++;
        } else {
          alert("Error option");
        }
     
      }
      
      alert("Your victories " + victories + " times");
      alert("Your defeats " + defeats + " times");

