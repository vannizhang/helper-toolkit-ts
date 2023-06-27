/**
 * Abbreviates a number by converting it into a shorter format with an appropriate suffix.
 * @param {number} num - The number to be abbreviated.
 * @param {number} [fixed] - The number of decimal places to show. Defaults to 0 if not provided.
 * @returns {string} The abbreviated number as a string with the appropriate suffix.
 */
const abbreviateNumber = (num: number, fixed?: number) => {
  if (num === null) {
    return null;
  } // terminate early
  if (num === 0) {
    return '0';
  } // terminate early
  fixed = !fixed || fixed < 0 ? 0 : fixed; // number of decimal places to show
  fixed = num > 10000 ? 0 : 1;
  const b: string[] = num.toPrecision(2).split('e'); // get power
  const k: number = b.length === 1 ? 0 : Math.floor(Math.min(+b[1].slice(1), 14) / 3); // floor at decimals, ceiling at trillions
  const c: number = k < 1 ? +num.toFixed(0 + fixed) : +(num / Math.pow(10, k * 3)).toFixed(fixed); // divide by power
  const d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
  const e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
};

/**
 * Converts a number to a string representation with commas for better readability.
 * @param {number} x - The number to be formatted.
 * @returns {string} The formatted string representation of the number with commas.
 */
const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export { abbreviateNumber, numberWithCommas };
