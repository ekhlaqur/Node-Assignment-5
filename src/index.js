var http = require("http");
const port = 8081;

function handleServer(req, res) {
   if (req.url == "/welcome") {
    res.writeHead(200, {
      "Content-type": "text/plain"
    });
    res.end("welcome to  Dominos!");
  } else if (req.url == "/contact") {
    res.writeHead(200,  { "Content-type": "application/json" });
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com"
      })
   );
  } else {
    res.writeHead(404, {
      "Content-type": "text/html"
    });
    res.end("<h1> 404 Page is not found</h1>");
  }
}

const httpServer = http.createServer(handleServer);

httpServer.listen(port, () => {
  console.log(`server is up at  port ${port}`);
});

module.exports = httpServer;
