function isIsogram(str){

return  new Set(str.toLowerCase()).size === str.length ;
 
 
}



// Set is an object that allows you to store unique values.
// we make a new Set that is an array containing all the unique values of str.
// the length of the new set is compared to the length of str. 
// set length is accessed using .size
