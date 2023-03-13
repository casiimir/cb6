export const getDaysActualMonth = (plusMonth = 0) => {
  let actualYear = new Date().getFullYear();
  let actualMonth = new Date().getMonth() + 1 + plusMonth;
  let daysInActualMonth = new Date(actualYear, actualMonth, 0).getDate();

  return daysInActualMonth;
};

export const getMonthLiteral = (month = new Date().getMonth()) =>
  new Date(new Date().setMonth(month)).toLocaleString("it-IT", {
    month: "long",
  });

export const toCapitalize = (str) => {
  let firstChar = str.charAt(0).toUpperCase();
  let capitalizedStr = firstChar;

  for (let c = 1; c <= str.length - 1; c++) {
    capitalizedStr += str[c];
  }

  return capitalizedStr;
};
