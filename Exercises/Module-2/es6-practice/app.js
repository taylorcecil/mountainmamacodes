const carrots = ["bright orange", "ripe", "rotten"];

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

const mapVeggies = arr => {
  return arr.map(carrot => { type: "carrot", name: carrot });
};

console.log(mapVeggies(carrots))