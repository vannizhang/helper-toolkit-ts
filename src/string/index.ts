/**
 * Capitalizes the first letter of each word in a given text.
 * @param {string} text - The text to be capitalized.
 * @returns {string} The text with the first letter of each word capitalized.
 */
const capitalizeFirstLetter = (text: string) => {
  return (text = text
    .toLowerCase()
    .split(' ')
    .map((s: string) => {
      return s.charAt(0).toUpperCase() + s.substring(1);
    })
    .join(' '));
};

/**
 * Truncates a given text to a specified length and appends ellipsis (...) at the end if needed.
 * @param {string} text - The text to be truncated.
 * @param {number} [n=0] - The maximum length of the truncated text. Defaults to 0 if not provided.
 * @param {boolean} [useWordBoundary=false] - Determines whether to truncate at a word boundary. Defaults to false if not provided.
 * @returns {string} The truncated text with ellipsis (...) if applicable.
 */
const trunc = (text = '', n = 0, useWordBoundary = false) => {
  if (text.length <= n) {
    return text;
  }

  const subString = text.slice(0, n - 1);

  return (useWordBoundary ? subString.slice(0, subString.lastIndexOf(' ')) : subString) + '...';
};

export { capitalizeFirstLetter, trunc };
