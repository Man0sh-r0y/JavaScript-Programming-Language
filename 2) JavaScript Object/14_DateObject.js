// Date Object 
let date = Date(); //Returns Date in a string format
console.log(date);

date = new Date();// Date objects are created with the new Date() constructor.
console.log(date);

date = new Date(10);// If you supply only one parameter it will be treated as milliseconds.
console.log(date); // new Date(milliseconds).

date = new Date(2003, 10, 07);// new Date(year, month, ...) creates a date object with a specified date and time. 
// 7 numbers specify year, month, day, hour, minute, second, and millisecond(in that order)
console.log(date);

date = new Date("2003-11-06");// new Date(date string) creates a date object from a date string
console.log(date);// print date in string format

date = new Date("2003-11-06T11:55:21Z");
console.log(date.toString());// The toString() method returns a string as a string.
console.log(date.toDateString());// The toDateString() method returns the date (not the time) of a date object as a string.
console.log(date.toTimeString());// The toTimeString() method returns the time portion of a date object as a string.
console.log(date.toISOString());// The toISOString() method returns a date object as a string, using the ISO standard.
// The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ
// 2003-04-16T11:55:21.000Z
console.log(date.toUTCString());// The toUTCString() method returns a date object as a string, according to UTC.
// The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
console.log(date.toJSON());// The toJSON() method returns a date object as a string, formatted as a JSON date.
// JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ
console.log(date.toLocaleString());// toLocaleString() method returns a Date object as a string, using locale settings.
// The default language depends on the locale setup on your computer.
console.log(date.toLocaleDateString());// method returns the date (not the time) of a date object as a string, using locale conventions.
console.log(date.toLocaleTimeString());// returns the time portion of a date object as a string, using locale conventions.


// Get MEthods 
console.log(date.getFullYear());// getFullYear() returns the full year (4 digits) of a date.
console.log(date.getDay());// returns the day of the week (0 to 6) of a date.
console.log(date.getMonth());// returns the month (0 to 11) of a date.
console.log(date.getHours());// returns the hour (0 to 23) of a date.
console.log(date.getMinutes());// returns the minutes (0 to 59) of a date.
console.log(date.getSeconds());// returns the seconds (0 to 59) of a date.


// Set Value 
let birthday = new Date();
console.log(birthday);

birthday.setYear(2003)// sets the year of a date.
console.log(birthday);

birthday.setMonth(11);// sets the month of a date object.
console.log(birthday);

birthday.setDate(06);//  sets the day of the month of a date.
console.log(birthday);



date = new Date(2003,11,06);
console.log(date);
