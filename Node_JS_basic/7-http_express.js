const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  countStudents(database)
    .then((output) => {
      const responseText = `This is the list of our students${output}`;
      res.send(responseText);
    })
    .catch((err) => {
      res.status(500).send(`This is the list of our students${err.message}`);
    });
});

app.listen(1245);
module.exports = app;
