// requirements

// variables
const log = console.log;
const inputDate = 20231125;

// create a pure function
const getFullDate = (rawDate) => {

  // extract year, month, and day from input
  const year = Math.floor(rawDate / 10000);
  const month = Math.floor((rawDate % 10000) / 100);
  const day = rawDate % 100;
  
  // formatted the date
  const formattedDate = new Date(year, month - 1, day);
  // log(formattedDate);
  
  // set up arrays for days and months
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  // log(year, month, day);
  
  // get weekday and month names
  const weekDayName = weekDays[formattedDate.getDay()];
  const monthName = months[formattedDate.getMonth()];
  
  // do a check
  const fullDate = `${weekDayName}, ${monthName} ${day}, ${year}`;
  
} 
  // full Date
  log(getFullDate(inputDate));
  
  // exporting fullDate variable
  // module.exports = fullDate;
  