const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  process.stdout.write(`The server is listening to http://localhost:${PORT}\n`);
});
