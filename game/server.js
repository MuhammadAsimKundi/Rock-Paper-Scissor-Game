const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else if (page == '/image/fist.png') {
    fs.readFile('image/fist.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else if (page == '/image/hand-paper.png') {
    fs.readFile('image/hand-paper.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else if (page == '/image/scissors-2.png') {
    fs.readFile('image/scissors-2.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else if (page == '/image/bg.png') {
    fs.readFile('image/bg.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else {
    // Serve image files referenced in the CSS file
    const imgPath = page.substring(1); // Remove the leading slash
    fs.readFile(imgPath, function(err, data) {
      if (err) {
        console.error(err);
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
      } else {
        const contentType = getContentType(imgPath);
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
      }
      res.end();
    });
  }
});



const PORT = process.env.PORT || 8000;
server.listen(PORT, (err) => {
  if (err) {
    console.log('Something went wrong', err);
  } else {
    console.log(`Server is running on ${PORT}`);
  }
});
