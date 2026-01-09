const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

    const students = lines.slice(1)
      .map((line) => line.split(','))
      .filter((arr) => arr.length === 4);

    const total = students.length;
    const fields = {};

    for (const student of students) {
      const field = student[3];
      const firstname = student[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    let output = `\nNumber of students: ${total}`;
    for (const [field, names] of Object.entries(fields)) {
      output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    return output;
  } catch (err) {
    throw new Error('\nCannot load the database');
  }
}

module.exports = countStudents;
