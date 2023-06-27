import { getRoundedTimestamp } from './date';

import { lat2tile, long2tile, tile2Long, tile2lat } from './geometry';

import { abbreviateNumber, numberWithCommas } from './number';

import { capitalizeFirstLetter, trunc } from './string';

import { generateUID, isMobileDevice } from './misc';

export {
  // re-export date module
  getRoundedTimestamp,
  // re-export geometry module
  lat2tile,
  long2tile,
  tile2Long,
  tile2lat,
  // re-export number module
  abbreviateNumber,
  numberWithCommas,
  // re-export string moudle
  capitalizeFirstLetter,
  trunc,
  // re-export misc module
  generateUID,
  isMobileDevice,
};
