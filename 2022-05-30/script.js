let n = 3,
  j = 4;

m = n++ - j + 10;
console.log("m = " + m, "n = " + n); // m = 9 n = 4

let x = 2,
  y = 3,
  z = 1;

x = ++y + z++;
console.log("x = " + x, "y = " + y, "z = " + z); //x = 5 y = 4 z = 2
