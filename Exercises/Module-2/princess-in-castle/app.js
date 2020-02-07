// class Player {
//   constructor(name, totalCoins, status, hasStar) {
//     this.name = name;
//     this.totalCoins = totalCoins;
//     this.status = status;
//     this.hasStar = hasStar;
//   }
// }

// const setName = name => {
//   if (name == "Mario") {
//     Player.name = "Mario";
//   } else if (name == "Luigi") {
//     Player.name = "Luigi";
//   }
// };

// let playerDown = false;
// const gotHit = () => {
//   if ((playerDown = true)) {
//     // need to bring status down 1 notch
//     // Statuses go from "Powered Up" to "Big" to "Small" to "Dead"
//   }
// };

// let playerUp = false;
// const gotPowerup = () => {
//   if ((playerUp = true)) {
//     // need to bring status up 1 notch
//     // Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star
//   }
// };

// let gameActive = true;

// while (gameActive) {
//   // not sure yet
// }

// const addCoin = () => {
//   Player.totalCoins += 1;
// };

// const print = () => {
//   console.log(
//     `${Player.name} \nTotal Coins: ${Player.totalCoins} \nStatus: ${Player.status} \nStar Properties: ${Player.hasStar}`
//   );
// };

// const randomRange = () => {
//   random = Math.floor(Math.random() * (4 - 1)) + 1;

//   if (random == 0) {
//     gotHit();
//   } else if (random == 1) {
//     gotPowerup();
//   } else if (random == 2) {
//     addCoin();
//   }
//   print();
// };

class Player {
  constructor(
    name,
    totalCoins = 0,
    status = "Big",
    hasStar = false,
    gameActive = true
  ) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.gameActive = gameActive;
  }

  //   setName(namePicked) {
  //     if (namePicked === "Mario") {
  //       this.name = "Mario";
  //     } else if (namePicked === "Luigi") {
  //       this.name = "Luigi";
  //     }
  //     return this.name;
  //   }

  // cool feature, but I select the name in this instance

  gotHit() {
    if (this.status === "Powered Up") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "Small";
    } else if (this.status === "Small") {
      this.status = "Dead";
      this.gameActive = false;
    }
  }

  gotPowerUp() {
    if (this.status === "Small") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "Powered Up";
    } else if (this.status === "Powered Up") {
      console.log(`Congratulations! You got a star.`);
    }
  }

  addCoin() {
    this.totalCoins += 1;
  }

  print() {
    console.log(
      `Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`
    );
  }
}

const playerOne = new Player("Mario");

const intervalId = setInterval(function actions(min = 0, max = 3) {
  const number = Math.floor(Math.random() * (max - min) + min);
  console.log(number);
  if (number === 0) {
    playerOne.gotHit();
  } else if (number === 1) {
    playerOne.gotPowerUp();
  } else if (number === 2) {
    playerOne.addCoin();
  }
  if (playerOne.gameActive === false) {
    clearInterval(intervalId);
  }
  playerOne.print();
}, 1000);
