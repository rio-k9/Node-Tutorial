var fs = require('fs')

fs.mkdir('stuff', function(){
  fs.readFile('readme.txt', 'utf8', function(err, data){
    console.log(data)
    fs.writeFile('./stuff/writeme.txt', data)
  })
})

//
// fs.unlink('./stuff/writeme.txt', function(){
//   fs.rmdir('stuff')
// })