const http = require('http');

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'node-app';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from ${APP_NAME}!\n`);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
