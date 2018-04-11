var http = require('http')

var fs = require('fs')

var stream = fs.createReadStream(__dirname + '/readme.txt', 'utf8')

stream.on('data', function(chunk) {
  console.log('new chunk recieved')
  console.log(chunk)
})