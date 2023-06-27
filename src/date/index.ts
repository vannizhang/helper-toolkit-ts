/**
 * Returns a rounded timestamp based on the specified number of minutes.
 * @param {number} numOfMin - The number of minutes to round the timestamp to. Defaults to 5 if not provided.
 * @returns {number} The rounded timestamp in seconds.
 */
export const getRoundedTimestamp = (numOfMin = 5) => {
  numOfMin = numOfMin || 5;
  const coeff = 1000 * 60 * numOfMin;
  // or use any other date
  const date = new Date();
  const rounded = new Date(Math.floor(date.getTime() / coeff) * coeff).getTime();
  return rounded / 1000;
};
