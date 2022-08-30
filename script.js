/*
Game Basics:

    -You attack the first alien ship
    -If the ship survives, it attacks you
    -If you survive, you attack the ship again
    -If it survives, it attacks you again ... etc
    -If you destroy the ship, you have the option to attack the next ship or to retreat
    -If you retreat, the game is over, perhaps leaving the game open for further developments or options
    -You win the game if you destroy all of the aliens
    -You lose the game if you are destroyed
*/

/*
Create ship class that will be template for all ships,
Create subsequent ships that extend from main class
start with only 1 alien ship to test and perfect
create methods per specifications 

methods
logic for generating alien health/stats



*/

class Ship {
    constructor(name, hull, firepower, accuracy) {
      this.name = name,
      this.hull = hull ,
      this.firepower = firepower,
      this.accuracy = accuracy
    }
  }

class UssAssembly extends Ship {
    constructor(name, hull, firepower, accuracy) {
      super(name, hull, firepower, accuracy)
      
        this.name = 'USS Assembly'
        this.hull = 20,
        this.firepower = 5,
        this.accuracy = .7
    }
  attackAlien1(target) {
    return AlienShip1.hull -= 2;
    
  } 

  hitAccuracy() {
    return 
  }

   
}

class AlienShip1 extends Ship {
    constructor(name, hull, firepower, accuracy){
      super(name, hull, firepower, accuracy)
        this.hull = Math.floor(Math.random() * ((6 - 3) + 1) + 3); // Finds random number between 3 and 6
        this.firepower = Math.floor(Math.random() * ((4 - 2) + 1) + 2); // Finds random number between 2 and 4 
        this.accuracy = Math.random() * (.8 - .6) + .6;
    }
    attackUss() {
        return UssAssembly.hull -= 2;
    }
}

let startMessage = window.prompt('Press START to begin');

//insert event listener here to start game when button is clicked
function clickHandler(event) {
    console.log('Start Button Clicked');
 }

const btn = document.querySelector('.btn');
btn.addEventListener('click', clickHandler);

if(AlienShip1.hull <= 0) {
    window.prompt('You have defeated the enemy!') 
} else {
    this.attackAlien();
}