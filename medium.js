//create a function that has two parameters, an array and our target number x
const findIndex = (arr, x) => {
  //return the index of the target number
  return arr.indexOf(x);
};

console.log(findIndex([1, 2, 3, 4, 5], 2));
