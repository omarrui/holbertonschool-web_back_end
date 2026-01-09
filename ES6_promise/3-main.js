/*
 * In this file, import uploadPhoto and createUser from utils.js
 * 
 * Knowing that the functions in utils.js return promises, use the prototype below to collectively resolve all promises and log body firstName lastName to the console.
 * 
 * function handleProfileSignup()
 * In the event of an error, log Signup system offline to the console
 * 
 * Example:
 * bob@dylan:~$ cat 3-main.js
 * import handleProfileSignup from "./3-all";
 * 
 * handleProfileSignup();
 * 
 * bob@dylan:~$ 
 * bob@dylan:~$ npm run dev 3-main.js 
 * photo-profile-1 Guillaume Salva
 * bob@dylan:~$
 */

import handleProfileSignup from "./3-all";

handleProfileSignup();