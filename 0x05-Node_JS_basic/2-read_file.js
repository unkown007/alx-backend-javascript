const fs = require('fs');

module.exports = function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(path).isFile) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf-8')
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
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(map)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};
