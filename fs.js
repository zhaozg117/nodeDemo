const fs=require("fs");
fs.readFile("a.txt",function(err,data){
    console.log(err);
    console.log(data.toString());
});

fs.writeFile("bbb.txt","hello china",function(err,data){
    console.log(data);
})