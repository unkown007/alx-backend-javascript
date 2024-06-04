const express = require('express');
const fs = require('fs');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const app = express();
const PORT = 1245;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, content) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const parts = [];
      const data = content
        .toString('utf-8')
        .trim()
        .split('\n');

      const map = {};
      const dbFieldNames = data[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of data.slice(1)) {
        const record = line.split(',');
        const studentPropValues = record.slice(0, record.length - 1);
        const key = record[record.length - 1];
        if (!Object.keys(map).includes(key)) {
          map[key] = [];
        }

        const entries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        map[key].push(Object.fromEntries(entries));
      }

      const totalStudents = Object
        .values(map)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      parts.push(`Number of students: ${totalStudents}`);
      for (const [field, group] of Object.entries(map)) {
        parts.push([
          `Number of students in ${field}: ${group.length}.`,
          'List:',
          group.map((student) => student.firstname).join(', '),
        ].join(' '));
      }
      resolve(parts.join('\n'));
    }
  });
});

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  process.stdout.write(`The server is listening to http://localhost:${PORT}\n`);
});

module.exports = app;
