const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  //   res.write("Welcome to our home page"); //to write on the web page
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href='/'>Back home</a>  
`);
});

server.listen(5000);
