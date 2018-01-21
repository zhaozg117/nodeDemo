const http=require('http');
var server=http.createServer(function(req,res){
     console.log("serslfslfj");
   res.write('hello,nodeJs') ;
   res.end();
});

server.listen(8088);
