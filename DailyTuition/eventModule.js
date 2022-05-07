const events = require("events");
let ev = new events.EventEmitter();
ev.on('my_event_here',function(data){
    console.log("Internal: ",data)
});
ev.emit("my_event_here","Trigger the emit method");
// This will trigger the method only one time
ev.once("eventOnce",()=>console.log("Event once fired"))
ev.emit("eventOnce")
ev.emit("eventOnce")
ev.emit("eventOnce")
// with parameters
ev.once("event2",(p1,p2)=>console.log(`Internal methods with ${p1} and ${p2}`))
ev.emit("event2","Leo",1987)
//unregister the event
var c1 = (p1,p2)=>console.log(`Internal methods with ${p1} and ${p2}`);
ev.once("event3",c1)
ev.off("event3",c1)
ev.emit("event3","Mario",2022)
console.log("Unsuscribed");