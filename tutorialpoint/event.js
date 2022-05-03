//import
var events =  require('events');  
// the eventEmitter
var eventEmitter =  new events.EventEmitter();  

// listener #1 and #2
var listner1 =  function listner1()  { 
    console.log('listner1 executed.');  
}  
var listner2 =  function listner2()  { 
	console.log('listner2 executed.');  
}  

// Bind the connection event with the listner1 and listner2 function 		
eventEmitter.addListener('connect5', listner1);  
eventEmitter.on('connect5', listner2);  

//count the elements binded
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connect5'); 
console.log(eventListeners +  " Listner(s) listening to connection event");  
// Print> 2 Listner(s) listening to connection event

// Fire the connection event 
eventEmitter.emit('connection');  
// Print>listner1 executed.
// Print>listner2 executed.

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1); 
console.log("Listner1 will not listen now.");  

// Fire the connection event 
eventEmitter.emit('connection'); 
// Print>listner2 executed.

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection'); 
console.log(eventListeners +  " Listner(s) listening to connection event");
// Print> 1 Listner(s) listening to connection event
console.log("Program Ended.");	

