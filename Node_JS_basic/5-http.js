// Import the http module - built into Node.js for creating web servers
const http = require('http');

// Import the countStudents function from task 3 (async file reading)
const countStudents = require('./3-read_file_async');

// Get the database filename from command-line arguments
// process.argv is an array: [node, script.js, arg1, arg2, ...]
// process.argv[2] is the first argument after the script name
const database = process.argv[2];

// Create an HTTP server
// The callback function runs every time someone makes a request to the server
const app = http.createServer((req, res) => {
  // req.url contains the path requested (e.g., '/', '/students', '/about')
  
  // Set the response header to indicate we're sending plain text
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Check which URL path was requested
  if (req.url === '/') {
    // If the path is '/', send the welcome message
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // If the path is '/students', display the student list
    
    // Start building the response with the header message
    res.write('This is the list of our students\n');

    // Call countStudents to read and process the database file
    // This returns a Promise (async operation)
    countStudents(database)
      .then(() => {
        // When the promise resolves (success), end the response
        // countStudents already printed the student info to console
        // But we need to capture that output and send it in the response
        res.end();
      })
      .catch((error) => {
        // If the promise rejects (file not found, etc.), send the error message
        res.end(error.message);
      });
  } else {
    // If the path is anything else, send a 404 Not Found response
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// Tell the server to listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app so other files can use it
module.exports = app;
