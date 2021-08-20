import { getLocoScroll } from './src/hooks/getLocoScroll';
import getViewportSizes from './src/utils/getViewporSizes';
import logger from './src/utils/logger';

const Gia = {
  getLocoScroll,
  logger,
  getViewportSizes,
};

/**
 * @return Gia Object
 */
module.exports = Gia;
