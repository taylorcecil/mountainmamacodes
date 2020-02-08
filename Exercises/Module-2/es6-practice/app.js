// const carrots = ["bright orange", "ripe", "rotten"];

// // function mapVegetables(arr) {
// //     return arr.map(function(carrot) {
// //         return { type: "carrot", name: carrot }
// //     })
// // }

// const mapVeggies = arr => {
//   return arr.map(carrot => { type: "carrot", name: carrot });
// };

// console.log(mapVeggies(carrots))

const thePeople = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2,
    pets: [{ name: "nitro" }, { name: "ruby" }]
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

const [setItem, item] = useState();
const { name, value } = e.target;

// const [,,paris.name = "hilton"] = thePeople
// console.log(thePeople)

const [, eric] = thePeople;
eric.name = "taylor cecil";
console.log(thePeople);

const [, , , kanye] = thePeople;
kanye.age = 100;
console.log(thePeople);

// [] for arrays
// {} for objects

const vegetables = ["carrit", "tomat", "tomato soup"];

const [firstVegetable] = vegetables;
console.log(firstVegetable);
