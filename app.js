const http=require('http');
const fs=require("fs");
var server=http.createServer(function(req,res){
    console.log(req.url);
    // console.log("serslfslfj");
    var file_name="./www"+req.url;
    fs.readFile(file_name,function(err,data){
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
       
        res.end();
    });
//    res.write('hello,world') ;
   
});

server.listen(8088);
