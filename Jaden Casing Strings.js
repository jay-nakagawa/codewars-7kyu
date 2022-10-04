String.prototype.toJadenCase = function () {
return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
};

//since this is a protype we must use this.
// this.split takes the argument and splits it at each space, giving us an array of words
// .map goes through each element in the array and
  // x[0].toUpperCase() capitalizes the first letter of each word
  // + x.slice(1) adds the capitalized word to the rest of the string. (1) indicates we are starting from the 1st element or the 2nd letter
// .join(' ') joins all the elements in the array together using a space mark.
