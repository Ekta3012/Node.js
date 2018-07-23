var express=require('express');
var app=express();
var path=require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/:name',function(req,res){
    res.send("Hello world, I am "+req.params.name+" man !! <br/>"+'<img src="/static/'+req.params.name+'.jpeg" />');
})

app.listen(8080);