var events= require('events');
var eventEmitter=new events.EventEmitter();

var connectHandler=function connected(){
    console.log("succesfully connected");
    eventEmitter.emit('data received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('connection',function(){
    console.log('data received successfully');
});

eventEmitter.emit('connection');

console.log('Porgram ended');
