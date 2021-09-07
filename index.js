import { getLocoScroll } from './src/hooks/getLocoScroll';
import { getRandomNum, getRandomRGB } from './src/utils/getRandom';
import getViewportSizes from './src/utils/getViewporSizes';
import logger from './src/utils/logger';
import useMousePosition from './src/hooks/useMousePosition';
import useOnScreen from './src/hooks/useOnScreen';
import getCoffee from './src/utils/getCoffee';

const Gia = {
	getLocoScroll,
	logger,
	getViewportSizes,
	getRandomNum,
	getRandomRGB,
	useMousePosition,
	useOnScreen,
	getCoffee
};

/**
 * @returns Gia Object
 */
module.exports = Gia;
