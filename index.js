// import { getLocoScroll } from './src/hooks/getLocoScroll';
import { getRandomNum, getRandomRGB } from './src/utils/getRandom';
import getViewportSizes from './src/utils/getViewporSizes';
import logger from './src/utils/logger';
import useMousePosition from './src/hooks/useMousePosition';
import getCoffee from './src/utils/getCoffee';
import useCustomMouse from './src/hooks/useCustomMouse';
import useInterval from './src/hooks/useInterval';
import useOnScreen from './src/hooks/useOnScreen'

const Gia = {
	// getLocoScroll,
	logger,
	getViewportSizes,
	getRandomNum,
	getRandomRGB,
	useMousePosition,
	getCoffee,
	useCustomMouse,
	useInterval,
	useOnScreen,
};

/**
 * @returns Gia Object
 */
export default Gia;
