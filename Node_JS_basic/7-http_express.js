// Import Express framework
const express = require('express');
// Import the fs module for file reading
const fs = require('fs');

// Get the database filename from command-line arguments
// process.argv[2] is the first argument after the script name
const database = process.argv[2];

// Create an Express application
const app = express();

// Helper function to count students and return output as string
// This returns a Promise that resolves with the formatted output
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(path, 'utf-8', (error, data) => {
      // If there's an error reading the file, reject the promise
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split file content into lines
      const lines = data.split('\n');
      
      // Filter out empty lines and remove the header (first line)
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      // Start building the output string
      let output = `Number of students: ${students.length}\n`;

      // Create an object to group students by field
      const fields = {};

      // Process each student line
      students.forEach((line) => {
        // Extract firstname and field from CSV line
        const [firstname, , , field] = line.split(',');

        // Initialize array for this field if it doesn't exist
        if (!fields[field]) {
          fields[field] = [];
        }

        // Add student's firstname to their field's array
        fields[field].push(firstname);
      });

      // Build output for each field
      for (const field in fields) {
        const names = fields[field];
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      // Resolve the promise with the complete output string
      resolve(output);
    });
  });
}

// Define route for the root endpoint '/'
app.get('/', (req, res) => {
  // Send simple greeting message
  res.send('Hello Holberton School!');
});

// Define route for the '/students' endpoint
app.get('/students', (req, res) => {
  // Start building the response
  let responseText = 'This is the list of our students\n';

  // Call countStudents to read and process the database
  countStudents(database)
    .then((output) => {
      // When promise resolves, append the student data to response
      responseText += output;
      // Send the complete response
      res.send(responseText);
    })
    .catch((error) => {
      // If promise rejects, append error message to response
      responseText += error.message;
      // Send the response with error
      res.send(responseText);
    });
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for testing purposes
module.exports = app;