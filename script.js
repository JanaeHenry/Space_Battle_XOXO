

class Ship { 
    constructor(name, hull, firepower, accuracy) {
      this.name = name,
      this.hull = hull ,
      this.firepower = firepower,
      this.accuracy = accuracy
    }
  }

class HumanShip extends Ship { 
    constructor(name, hull, firepower, accuracy) {
      super(name, hull, firepower, accuracy)
      
        this.name = 'USS Assembly'
        this.hull = 20,
        this.firepower = 5,
        this.accuracy = .7
    }
    attackAlien(target){ 
      let randomNum = Math.random()
      if (randomNum <= this.accuracy) { 
        target.hull -= this.firepower 
          window.alert(`Attacked ${target.name} for ${this.firepower} damage!`)
      }
      else {
          (window.alert('You have missed!')) // if it doesn't hit, do something here
      }
      // after the player attacks, we are going to run the target's (alien's) attackMain method so that it attacks back.
      target.attackMain(ussAssembly);
      if(target.hull <= 0){
        alienGroup.shift();
      }
      if (alienGroup.length === 0){
        window.alert('You\'ve Defeated all the Aliens!');
      }
  }
    
  }
     
class AlienShip extends Ship { //Make an Alien Ship sub-class.
    constructor(name, hull, firepower, accuracy){
      super(name, hull, firepower, accuracy)
      // this.name = name,
        this.hull = Math.floor(Math.random() * ((6 - 3) + 1) + 3), // Finds random number between 3 and 6
        this.firepower = Math.floor(Math.random() * ((4 - 2) + 1) + 2), // Finds random number between 2 and 4 
        this.accuracy = Math.random() * ((.8 - .6) + .6)
    }
    attackMain(target) {
      let randomNum2 = Math.random()
       if (randomNum2 < this.accuracy) {
          target.hull -= this.firepower
          window.alert("You've been hit"); // target is the actual target of the attack. any changes made on target.whatever are going to affect the actual thing given to it.
           // (to reduce alien's health, think about target.hull)
       }
       else { window.alert('Enemy missed!') }
      }
    
}

//Make an instance of each class:
const ussAssembly = new HumanShip
const alienShip1 = new AlienShip('Durbozi')
const alienShip2 = new AlienShip('Vimocadon')
const alienShip3 = new AlienShip('Alimotton')
const alienShip4 = new AlienShip('Qitago')
const alienShip5 = new AlienShip('Kumon')
const alienShip6 = new AlienShip('Zeeta')

const alienGroup = [alienShip1 , alienShip2, alienShip3, alienShip4 , alienShip5, alienShip6]
console.log(alienGroup)


const btn = document.getElementsByClassName('btn');
    const startButton = document.getElementById('start');
    const startTitle = document.getElementById('title');
    const attackButton = document.getElementById('attack');

    window.onload = () => {
      document.getElementById('attack').style.visibility = 'hidden';
      document.getElementById('restart').style.visibility = 'hidden';
    }
    //Hide start button after it is clicked
    startButton.addEventListener('click', () => {
      startButton.style.visibility = 'hidden';
      startTitle.style.visibility = 'hidden';
      attackButton.style.visibility = 'visible';
    })





    //Start Game function
      const startGame = () => {
      document.getElementsByClassName('start-game');
    }

    //Attack button
    attackButton.addEventListener('click', () => {
      // check if any enemy is left (if statement -- not a loop)
      if(alienGroup.length !== 0) {
        // if so, attack the first one in the array
        ussAssembly.attackAlien(alienGroup)

      } else {
        // else, end the game with disabling button and popping up YOU WIN! alert.
        endGame();

      }
          
    })


     
    //Attack method
    // attackAlien(target) {
    //   let generateAccuracy = Math.random();
    //   while(this.hull > 0){
    //     fireAttack();
    //   }
    // }

    //End Game function
    const endGame = () => {
      window.alert('You\'ve Defeated all the Aliens!');
      document.addEventListener('click', startGame)

    }
  






















// let startMessage = window.prompt('Press START to begin');

// //insert event listener here to start game when button is clicked
// function clickHandler(event) {
//     console.log('Start Button Clicked');
//  }

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', clickHandler);

// if(AlienShip1.hull <= 0) {
//     window.prompt('You have defeated the enemy!') 
// } else {
//     this.attackAlien();
// }











// attackAlien1(target) {
//   return AlienShip1.hull -= 2;
  
// } 

// hitAccuracy() {
//   return 
// }

// attackUss() {
//   return UssAssembly.hull -= 2;
// }