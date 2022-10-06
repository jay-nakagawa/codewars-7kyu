function longest(s1, s2) {
 return [...new Set((s1+s2).split(''))].sort().join('')
}

//goal is to take two strings, return a sorted string with unique values only.

// add the two strings together and split them into an array.
// using new Set we can make a new set of unique values. By default, a set can only hold unique values.
// by placing new Set within square brackets with spread syntax we can create an array using the newly created set.
// this array is then sorted and joined together producing a string, with unique values, that is sorted.
