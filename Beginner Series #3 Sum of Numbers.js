function getSum( a,b )
{
  let sum = 0
  if (a < b){ 
    for(let i = a; i <= b; i++ ){
     sum += i
      }
    }
    else if (b < a){ 
    for(let i = b; i <= a; i++ ){
     sum += i
      }
   }else{
     sum += a
   }
  return sum
}

//function must sum a series of numbers going from a to b
//create the loop that increments from a to b
//create a counter which sums from a to b
