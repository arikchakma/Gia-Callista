/**
 * getCoffee
 * @param {Number} time - Reading time
 * @returns - A string of coffee
 */
export default function getCoffee(time) {
  // Increasing reading time times 2 for more coffee🥳
  const readingTime = time * 2;

  // Calculating the number of coffee
  const numberOfCoffee = Math.round(readingTime / 3);

  // Emtry coffee array so that we can push emoji
  const coffee = [];

  // Defining which emoji
  const emoji = numberOfCoffee <= 3 ? "☕" : "🍵";

  // Looping through numberOfCoffee and push that number of emoji on coffee array
  for (let i = 0; i < numberOfCoffee; i++) coffee.push(emoji);

  // Returning those emoji as a string
  return coffee.join("");
}
