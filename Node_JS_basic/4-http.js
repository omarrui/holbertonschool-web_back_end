// Import the http module - built into Node.js for creating web servers
const http = require('http');

// Create an HTTP server
// The callback function runs every time someone makes a request to the server
const app = http.createServer((req, res) => {
  // req = request (incoming data from the client/browser)
  // res = response (what we send back to the client/browser)

  // Set the response header to indicate we're sending plain text
  // Status code 200 means "OK" - everything worked fine
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body - the actual content displayed in the browser
  // This is what the user sees when they visit the server
  res.end('Hello Holberton School!');
});

// Tell the server to listen on port 1245
// Port is like an apartment number - it specifies which "door" to use
// The callback runs once the server successfully starts
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app so other files can use it (for testing, etc.)
module.exports = app;
