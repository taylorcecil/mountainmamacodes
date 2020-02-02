const peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
];

// Write a function that returns a list of everyone older than 18, which is sorted alphabetically by last name, and where
// each name and age is embedded in a string that looks like an HTML <li> element.

const overEighteen = peopleArray
  .filter(element => element.age > 18)
  .sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  })
  .map(
    element =>
      `<l1>${element.firstName} ${element.lastName} is ${element.age}</li>`
  );

console.log(overEighteen);
