
$(document).ready(function () {
var intArray = [1, 2, 3, 4, 5];
//lets use each function
$.each(intArray, function(index, element) {
  if (element === 3) {
    return false;
  }
  console.log(element); // prints only 1,2. Breaks the loop as soon as it encountered number 3
});

//lets use map function
$.map(intArray, function(element, index) {
  if (element === 3) {
    return false;
  }
  console.log(element); // prints only 1,2,4,5. skip the number 3.
});

});