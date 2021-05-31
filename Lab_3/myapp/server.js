var express=require('express');
var app=express();
app.use(express.static(__dirname));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})
app.listen(process.env.PORT||8000);
console.log('Run server!');

var fs=require('fs');
app.get('/getusers',function(req,res){
    fs.readFile('data.json','utf-8',function(err,data){
        console.log(data);
        res.send(data);
    })
})