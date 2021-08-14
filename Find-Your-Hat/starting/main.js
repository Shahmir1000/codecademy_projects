const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

console.log("USE WASD TO MOVE AROUND THE FIELD")
console.log("░░░░░")
console.log("░░W░░")
console.log("░ASD░")
console.log("░░░░░")
console.log("THE OBJECT OF THE GAME IS TO GET THE HAT '^' BY AVOIDING THE HOLES AND STAING ON THE FIELD.")

class Field {
  constructor(fieldArray){
    this._fieldArray = fieldArray;
    this.characterPosition  = this.findPosition('*');
    this.hatPosition = this.findPosition('^');
    this.gameStatus = "continue";
  }
  findPosition(element){
    let field = this._fieldArray
    for(let y = 0; y<field.length; y++){
      for(let x =0; x<field[y].length; x++){
        if(field[y][x] === element){
          return {x: x, y: y};
        }
      }
    }
  }
  printPosition(position){
    return this._fieldArray[position.y][position.x];
  }
  moved(direction){
    direction = direction.toLowerCase();
    this.currentPosition = this.characterPosition;
    switch(direction){
      case "w":
        this.characterPosition.y -= 1;
        break;
      case "s":
        this.characterPosition.y += 1;
        break;
      case "a":
        this.characterPosition.x -= 1;
        break;
      case "d":
        this.characterPosition.x += 1;
        break;
      default:
        console.log("Only enter 1 letter w,s,a,d for up,down,left,right");
        return false;
    }
    if(this.checkGameStatus() === "continue"){
      if(this.printPosition(this.characterPosition) === '*'){
        this.characterPosition  = this.currentPosition;
        console.log("Invalid Direction!")
        return false;
      }
      else{
        this._fieldArray[this.characterPosition.y][this.characterPosition.x] = "*";
        this.printFieldArray();
      }
    }
    else{
      this.printResult();
    }
  }
  checkGameStatus(){
    if(this.checkBounds()=== "outBound" || this.foundHole()=== true)
      this.gameStatus = "lost";
    else if(this.foundHat() === true){
      this.gameStatus = "won"
    }
    return this.gameStatus;
  }
  foundHole(){
    let characterPosition = this.printPosition(this.characterPosition);
    if(characterPosition === "O")
      return true;
    else
      return false;
  }
  foundHat(){
    let hat = this.printPosition(this.hatPosition)
    let character = this.printPosition(this.characterPosition)
    if ( hat === character)
      return true;
    else 
      return false;
  }
  checkBounds(){
    const yRange = this._fieldArray.length;
    const xRange = this._fieldArray[0].length;
    if(this.characterPosition.y < 0 || this.characterPosition.y >= yRange || this.characterPosition.x <0 || this.characterPosition.x >= xRange){
      return "outBound"
    }
    else 
      return "inBound";
  }

  printFieldArray(){
    let field = this._fieldArray;
    for(let i = 0; i< field.length; i++){
      let row = ""
      field[i].forEach(element => {
        row+=element;
      });
      console.log(row);
    }
  }
  printResult(){
    console.log(`The game ended you have ${this.gameStatus}!`)
  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

myField.printFieldArray();
while(myField.gameStatus === "continue"){
  const direction = prompt("Enter a direction: ");
  myField.moved(direction);
}

