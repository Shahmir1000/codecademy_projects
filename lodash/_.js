let _ = {
  clamp: function(number,lower,upper){
    let lowerClampedValue = Math.max(number,lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange: function(number, start=0, end){
    newEnd =Math.max(end,start);
    newStart= Math.min(start,end)
    if(number<newStart || number>=newEnd){
      return false;
    }
    return true;
  },
  words: function(str){
    let words = str.split(" ");
    return words;
  },
  pad: function(string='', length=0, chars=' '){
    if(string.length<length){
      let totalSpacing = length - string.length;
      let leftSpacing = totalSpacing/2;
      let rightSpacing = totalSpacing/2;
      if(totalSpacing%2 != 0){
        leftSpacing = Math.floor(leftSpacing);
        rightSpacing = Math.ceil(rightSpacing);
      }
      string = string.padStart(string.length+leftSpacing,chars);
      string = string.padEnd(string.length+rightSpacing,chars);
    }
    return string;
  },
  has: function(object,path){
    if (object[path] === undefined){
      return false;
    }
    else {
      return true;
    }
  },
  invert: function (object){
    values = Object.values(object);
    keys = Object.keys(object);
    let newObject ={};

    for(let i =0; i<keys.length; i++){
      if(typeof keys[i] === "object"){
        newObject["object Object"] = keys[i];
      }
      else{
        newObject[values[i]] = keys[i];
      }
    }
    return newObject;
  },
  findKey: function(object,predicate){

    for (const [key, value] of Object.entries(object)) {
      if(predicate(value)){
        return key;
      }
    }
    return undefined;
  },
  drop: function (array,number=1){
    arrayLength = array.length;
    if(number>arrayLength){
      return [];
    }
    else{
      array = array.slice(number);
    }
    return array;
  },
  dropWhile: function (array, predicate){
    let newArray =[];
    let value = true;
    let i = 0;
    while(value){
      value = predicate(array[i], i, array);
      i++
      if(i===array.length){
        i=0
      }
    }
    newArray = array.slice(i+1);
    return newArray;

  },
  chunk: function(array, size){
    let newArray = [];
    array = array.reverse();
    while(array.length !== 0 ){
      let sizeElement = [];
      for(let i=0; i<size; i++){
        if(array.length !== 0 ){
          sizeElement.push(array.pop());
        }
        else{
          break;
        }
      }
      newArray.push(sizeElement);
    }
    return newArray;
  }
}





// Do not write or modify code below this line.
module.exports = _;