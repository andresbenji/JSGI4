//function that gets the average of an array of numbers
const average = (arr) => {
  let sum = 0;

  //loops through all of the numbers in an array
  for (i = 0; i < arr.length; i++) {
    //adds each number to the variable sum
    sum += arr[i];
  }

  //create a variable that equals to sum divided by the length of the array
  let total = sum / arr.length;

  //return the average of the array
  return total;
};

//log the function and enter an array of numbers as an argument
console.log(average([1, 4, 7])); //Output: 4
console.log(average([10, 5])); //Output: 7.5
console.log(average([1.5, 3, 2.5, 1])); //Output: 2
