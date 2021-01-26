// Create a function that takes two integers and displays the larger one.
//
// Example:
//
// largestInt(11, 22) → 22
//
// largestInt(22, 44) → 44
//
// * Hints:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Relational_operators

function largestInt(a,b){
  if (a > b){
    console.log(a, "is the largest integer.");
    return a;
  } else if(a < b){
    console.log(b, "is the largest integer.");
    return b;
  } else{
    console.log(a, "is equal to", b+".");
    return a;
  }
};
largestInt(114,87);
largestInt(65,41);
largestInt(10,10);

module.exports = largestInt;
