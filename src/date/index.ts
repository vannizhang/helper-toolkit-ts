const addMinutesToCurrentTime = (numOfMinToAdd: number) => {
  return new Date().getTime() + numOfMinToAdd * 60 * 1000;
};

const getMonthName = (monthIndex = -1, isShort = false) => {
  const names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const shortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (monthIndex === -1) {
    return '';
  }

  return isShort ? shortNames[monthIndex] : names[monthIndex];
};

export { addMinutesToCurrentTime, getMonthName };
