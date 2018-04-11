var events = require('events')

var util = require('util')

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter)

var james = new Person('james')
var maria = new Person('maria')
var rio = new Person('rio')

var people = [james, maria, rio]

people.forEach(person =>{
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg)
  })
})

james.emit('speak', 'Hey man')
maria.emit('speak', 'I like cheese')