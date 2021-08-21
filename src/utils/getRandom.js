/**
 * Generate random numbers in a specified range
 * @param { number } minimum - default 0
 * @param { number } maximum - default 1
 */
export function getRandomNum(minimum = 0, maximum = 1) {
	if (maximum === 1 && minimum === 0) return Math.random();
	return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

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
