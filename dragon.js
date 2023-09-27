// Your code here
class Dragon{ //Creae a Dragon class
constructor(name, color){ //Create a constructor with parameters of name and color
  this.name = name;
  this.color = color;
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons){
  return dragons.map(dragon => dragon.name);
  }
}


const puff = new Dragon("Puff", "green");
//console.log(typeof dragons);

console.log(puff);
console.log(puff.breathesFire());

const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());

module.exports = Dragon;



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
