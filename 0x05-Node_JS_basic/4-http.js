const { createServer } = require('http');

const hostname = '127.0.0.1';
const port = 1245;

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
});

server.listen(port, hostname);
