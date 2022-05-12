let num = 17;
console.log(num);
console.log(typeof num);

let string = "Test!";
console.log(typeof string);

num = num + 1;
console.log(num);
console.log(num - 8);
console.log((num = num - 1));
console.log((num = num * 5));
console.log((num = num / 5));
console.log((num = num % 5));
console.log(++num);
console.log(--num);
console.log((num *= 5));
console.log((num /= 5));
console.log((num %= 5));

let numA = 7,
  numB = 8;
console.log(numB * numA);

let price = (3 + 2) * 2;
console.log("price = " + price);

let processionError = 1.1 + 1.3;
console.log(processionError);

let escNotA = "Escape\nNotation";
console.log(escNotA);

let escNotB = 'lorem"I"psum';
console.log(escNotB);

let backtick = `Hello Word! ${num}`;
console.log(backtick);

let name = "Sakib";
let message = `Hello ${name}`;
console.log(message);
console.log(message + " 👋");

console.log((message = message.toLowerCase()));
console.log((message = message.toUpperCase()));

console.log(message.substring(6));
console.log(message.length);
console.log("--T--");
console.log(typeof num);
console.log((num = num.toString()));
console.log(typeof num);

stringTo = "123.45";
console.log(typeof stringTo);
console.log((stringToFloat = Number.parseFloat(stringTo)));
console.log(typeof stringToFloat);
console.log((stringToNumber = Number.parseInt(stringTo)));
console.log(typeof stringToNumber);

let bool = false;
console.log(bool);
console.log(typeof bool);

bool = !bool;
console.log(bool);

let a;
console.log(a);
let b = null;
console.log(b);

let person = {
  fname: "Copa",
  lnam: "Samsu",
};

console.log(person);
console.log(person.fname, person.lnam);
