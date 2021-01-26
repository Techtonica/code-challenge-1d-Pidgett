// Write a function that returns true if the two arguments passed are exactly equal.
//
// Examples:
//
// isEqual(5,5) --> true
//
// isEqual(1,5) --> false
//
// isEqual("a","A") --> false
//
// isEqual("k",`k`) --> true
//
// * Hint: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

function isEqual(a,b){
  if(a === b){
    console.log(a,"&",b,"are equal.")
  return a + "&" + b + "are equal.";
} else{
  console.log(a,"&", b,"are not equal.");
  return a + "&" + b + "are not equal.";
}
};

module.exports = isEqual;
