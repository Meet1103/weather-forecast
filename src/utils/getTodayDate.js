export const getTodayDate = () => {
  const date = new Date();

  const todayDate = `${date?.getDate()}/${
    date?.getMonth() + 1
  }/${date?.getFullYear()}`;

  return todayDate;
};
