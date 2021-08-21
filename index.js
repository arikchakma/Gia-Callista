import { getLocoScroll } from './src/hooks/getLocoScroll';
import { getRandomNum, getRandomRGB } from './src/utils/getRandom';
import getViewportSizes from './src/utils/getViewporSizes';
import logger from './src/utils/logger';

const Gia = {
	getLocoScroll,
	logger,
	getViewportSizes,
	getRandomNum,
	getRandomRGB,
};

/**
 * @return Gia Object
 */
module.exports = Gia;
