export const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const numberToVideoLenght = (number) => {
  const time = new Date(number * 1000);
  return (
    time.getUTCHours() +
    ":" +
    time.getUTCMinutes().toString().padStart(2, 0) +
    ":" +
    time.getUTCSeconds().toString().padStart(2, 0)
  );
};

export const printDate = (date, type) => {
  switch (type) {
    case 1:
      return (
        date.getFullYear() +
        "-" +
        (date.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        date.getDate().toString().padStart(2, "0")
      );

    case 2:
      return (
        date.getDate().toString().padStart(2, "0") +
        "/" +
        (date.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        date.getFullYear()
      );
  }
};
