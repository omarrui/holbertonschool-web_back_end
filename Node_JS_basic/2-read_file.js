// Import the fs (file system) module - built into Node.js
const fs = require('fs');

// Define the countStudents function that takes a file path as argument
function countStudents(path) {
  try {
    // Try to read the file synchronously (blocks code until file is read)
    // 'utf-8' tells Node.js to read the file as text (not binary)
    const data = fs.readFileSync(path, 'utf-8');

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
  } catch (error) {
    // If any error occurs (file not found, permission denied, etc.), throw a new error
    throw new Error('Cannot load the database');
  }
}

// Export the function so other files can use it
module.exports = countStudents;