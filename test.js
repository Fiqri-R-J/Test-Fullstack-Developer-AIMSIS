// “In Hogwarts the currency is made up of galleon (G) and Sickle (s), and there are seven coins in general circulation:
// 1s, 5s, 10s, 25s, 50s, G1(100s), and G2(200s)
// It's possible to make G3.5 in the following way:
// 1xG2 +1xG1 + 4x10s +1x5s + 5x1s
// How many different ways can G3.5 be made using any number of coins?

const countCombinations = (targetAmount, denominations) => {
  const countWays = new Array(targetAmount + 1).fill(0);
  countWays[0] = 1;

  for (let i = 0; i < denominations.length; i++) {
    const coin = denominations[i];

    for (let j = coin; j <= targetAmount; j++) {
      countWays[j] += countWays[j - coin];
    }
  }

  return countWays[targetAmount];
};

// Define the available coin denominations
const denominations = [1, 5, 10, 25, 50, 100, 200];

// Tentukan target jumlah yang ingin dicapai
const targetAmount = 350;

// Determine the target amount to be achieved
const combinations = countCombinations(targetAmount, denominations);
console.log(
  `Number of combinations to create ${targetAmount} is: ${combinations}`
);

//Number of combinations to create 350 is: 23642
