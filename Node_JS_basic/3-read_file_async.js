// Import the fs (file system) module - built into Node.js
const fs = require('fs');

// Define the countStudents function that takes a file path as argument
// This function returns a Promise
function countStudents(path) {
  // Return a new Promise - it represents a future value (file content)
  return new Promise((resolve, reject) => {
    // Read the file asynchronously (non-blocking)
    // This doesn't wait - it continues to next line immediately
    fs.readFile(path, 'utf-8', (error, data) => {
      // This callback runs LATER when the file is read (or fails)
      
      // If there was an error (file not found, etc.), reject the promise
      if (error) {
        reject(new Error('Cannot load the database'));
        return; // Stop execution here
      }

      // Split the file content by newlines to get an array of lines
      const lines = data.split('\n');

      // Filter out empty lines and remove the header (first line)
      // trim() removes whitespace, so empty lines become '' and are filtered out
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      // Log the total number of students
      console.log(`Number of students: ${students.length}`);

      // Create an object to group students by their field (CS, SWE, etc.)
      const fields = {};

      // Loop through each student line
      students.forEach((line) => {
        // Split the line by commas to get individual values
        // Example: "Johann,Kerbrou,30,CS" becomes ["Johann", "Kerbrou", "30", "CS"]
        const [firstname, , , field] = line.split(',');

        // If this field doesn't exist in our object yet, create an empty array
        if (!fields[field]) {
          fields[field] = [];
        }

        // Add the student's firstname to the array for their field
        fields[field].push(firstname);
      });

      // Loop through each field and log the count and list of students
      for (const field in fields) {
        // Get the array of names for this field
        const names = fields[field];
        // Log: "Number of students in CS: 6. List: Johann, Arielle, ..."
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      // Resolve the promise (success!) - we're done
      resolve();
    });
  });
}

// Export the function so other files can use it
module.exports = countStudents;
