var express = require('express')
var app = express()

/* var myLogger= function(req,res,next){
    console.log('Logged');
    next()
} */

var requestTime=function(req,res,next){
    req.requestTime=Date.now()
    next()
}

app.use(requestTime)


//app.use(myLogger)

app.get('/',function(req,res,next){
    //res.send("Hello world");
    var responseText="Hello world!<br>"
    responseText+='<small>Requested at: '+req.requestTime+'</small>'
    res.send(responseText)
})
app.listen(3000)