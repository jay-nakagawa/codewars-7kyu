```javascript
function openOrSenior(data){
 
  let result = []

  for(let index = 0; index < data.length; index++){
   if (data[index][0] >= 55 && data[index][1] > 7) {result.push('Senior')}
   else {result.push('Open')}
 

}
return result
}
```

>we receive an array containing arrays 
>each array contains 2 numbers
>first number represents age and the second number represents handicap
>if age >= 55 AND handicap > 7 then return 'Senior' 
>else return 'Open'
>do this for each array and put the result in an array

>first we create an array to hold the result
>create a for loop that starts at 0, runs for the length of the array passed in (data.length), then goes up by one
>inside the for loop we create an if else statement
>by using data[index][0] we can access the value in the 0th element
>data[index][1] access the 1st element
>check if age AND handicap then push the result to the empty array
>return the result array

