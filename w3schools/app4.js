/**
 * EVENTS 
 * Every action on a computer is an event. 
 * Like when a connection is made or a file is opened.
 * Node.js has a built-in module, called "Events", 
 * where you can create-, fire-, and listen for- your own events.
 */

 var events = require('events');
 var eventEmitter = new events.EventEmitter();

 //Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('123', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('123');