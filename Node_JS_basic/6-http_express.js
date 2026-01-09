const express = require('express');

// Create an Express application
const app = express();

// Define route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app
module.exports = app;
