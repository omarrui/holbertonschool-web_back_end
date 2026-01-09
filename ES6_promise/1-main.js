import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
/*
 * Using the prototype below, return a promise. The parameter is a boolean.
 * 
 * getFullResponseFromAPI(success)
 * When the argument is:
 * 
 * true
 * resolve the promise by passing an object with 2 attributes:
 * status: 200
 * body: 'Success'
 * 
 * false
 * reject the promise with an error object with the message The fake API is not working currently
 * 
 * Example:
 * bob@dylan:~$ cat 1-main.js
 * import getFullResponseFromAPI from './1-promise';
 * 
 * console.log(getFullResponseFromAPI(true));
 * console.log(getFullResponseFromAPI(false));
 * 
 * bob@dylan:~$ npm run dev 1-main.js 
 * Promise { { status: 200, body: 'Success' } }
 * Promise {
 *   <rejected> Error: The fake API is not working currently
 *     ...
 *     ...
 * bob@dylan:~$
 */