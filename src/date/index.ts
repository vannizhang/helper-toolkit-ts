const addMinutesToCurrentTime = (numOfMinToAdd: number) => {
  return new Date().getTime() + numOfMinToAdd * 60 * 1000;
};

export { addMinutesToCurrentTime };
