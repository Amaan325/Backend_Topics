const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcome to Home Page");
  else if (req.url === "/about") res.end("Here is a brief history of us");
  else {
    res.end(`
    <h1>Oops!</h1>
    <p>Doesnot Exsit</p>
    <a href ="/">Back Home </a>
    `);
  }
});

server.listen(5000);
