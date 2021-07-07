var n = prompt("Enter n");
var finalSeq = fibonacciGenerator(n);
console.log(finalSeq);

function fibonacciGenerator(n) {
  n = parseInt(n);
  var array = [];
  if (n === 1) {
    var array = [0];
    return array;
  }

  if (n === 2) {
    var array = [0, 1];
    return array;
  }
  if (n > 2) {
    array = [0, 1];
    while (n > array.length) {
      //var count = n - 1;
      array.push(array[array.length - 1] + array[array.length - 2]);
      //count++;
    }
    return array;
  }
}
