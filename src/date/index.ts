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

const formatTimestamp = (timestamp = 0) => {
  if (!timestamp) {
    return '';
  }

  timestamp = +timestamp;

  const date = new Date(timestamp);

  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const month = monthIndex + 1;
  const day = date.getDate();
  const formatedMonth = month < 10 ? `0${month}` : month.toString();
  const formatedDay = day < 10 ? `0${day}` : day.toString();

  return `${year}/${formatedMonth}/${formatedDay}`;
};

export { addMinutesToCurrentTime, getMonthName, formatTimestamp };
