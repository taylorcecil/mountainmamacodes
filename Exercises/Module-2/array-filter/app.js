// Given an array of numbers, return a new array that has only the numbers that are 5 or greater

const arr = [1, 6, 22, 88, 47];

const newArr = arr.filter(element => element >= 5);

console.log(newArr);

// Given an array of numbers, return a new array that only includes the even numbers

function evenNums(gtj) {
  return gtj.filter(element => element % 2 === 0);
}

const newEvenNums = evenNums(arr);

console.log(newEvenNums);

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const food = ["kale", "avocado", "hummus", "milk", "yogurt"];

const fewer = food.filter(element => element.length <= 5);

console.log(fewer);

// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

const people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
];

const dontBelong = arr => {
  return arr.filter(element => element.member);
}; // wrapper function allows use for other arrays in future

console.log(dontBelong(people));

//Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)

const movieGoers = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 }
];

const redPill = movieGoers.filter(element => element.age >= 18); // since this is one line function, can only use once, cannot call again in future

console.log(redPill);
