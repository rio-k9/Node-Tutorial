var http = require('http')

var fs = require('fs')
console.log('nawdawdawdawdwad');
console.log(__dirname)

var server = http.createServer(function(req, res) {

  console.log('request was made from: ' + req.url)

  if (req.url === '/' || req.url === '/index') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  }

  else if (req.url === '/api/data') {
    var datastore = [{name: 'Rio', age: 25,}, {name:'Ayra', age:21}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(datastore));
  }

  else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(2000, '127.0.0.1')
console.log('Listening on port 2000')