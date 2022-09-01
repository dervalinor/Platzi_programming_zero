//create a function show random numbers in a 
//interval of 10 - 40 and random numbers != 0

#include <iostream>
#include <stdlib.h>

int main(){
  int number = 50;
  
  while(number > 40 || number < 9){
    number = rand()%100;
  }

  std::cout << number;

}
