const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fieldGroups = {};

    students.forEach((student) => {
      const fields = student.split(',');
      const firstName = fields[0];
      const field = fields[3];

      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }
      fieldGroups[field].push(firstName);
    });
    
    for (const field in fieldGroups) {
      if (Object.prototype.hasOwnProperty.call(fieldGroups, field)) {
        const studentsList = fieldGroups[field].join(', ');
        console.log(`Number of students in ${field}: ${fieldGroups[field].length}. List: ${studentsList}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
