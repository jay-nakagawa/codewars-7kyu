function filter_list(l) {
 return l.filter(element => typeof(element) === 'number' )
}


//filter creates a shallow copy of an array made up of elements that pass the test.
//the test is elements that have a type of number.
// could also do elements that do not have a type of string by !== 'string'
