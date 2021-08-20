/**
 * Generate random numbers in a specified range
 * @param { number } min
 * @param { number } max
 */
export const getRandomNum = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

/**
 * Generate a random rgb color
 * @param { number } alpha - Opacity of that color; default 1
 * @returns A string like rgba(255, 0, 255, 0.1)
 */

export function getRandomRGB(alpha = 1) {
  const getRandomNum = (minimum, maximum) =>
    Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  return `rgba(${getRandomNum(0, 255)}, ${getRandomNum(0, 255)}, ${getRandomNum(
    0,
    255
  )}, ${alpha})`;
}
