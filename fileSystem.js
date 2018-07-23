var fs = require("fs");

//Asynchronous read/write


// fs.writeFile("file.txt","ekta",function(err,data){
//     if(err){
//         console.log(err.stack);
//     }
//     console.log("Written sucessfully");
    
// }) 

module.exports.readContent = function(){
    // fs.readFileSync('file.txt',function(err,data){
    //     if(err){
    //         console.log(err.stack);
    //         return;
    //     }
    //     //console.log("Asynchronous read:"+data.toString());
    //     return  "hhhhhh"; //data.toString();
    // });
    return data= fs.readFileSync('file.txt');
}
// fs.readFile('file.txt',function(err,data){
//     if(err){
//         console.log(err.stack);
//         return;
//     }
//     console.log("Asynchronous read:"+data.toString());
// });
// console.log("Program ended"); 


//Syncronous read/write

// fs.writeFileSync("file.txt","hi i am ekta");
// var data=fs.readFileSync('file.txt');

// console.log("Synchronous read:"+data.toString());
// console.log("Program ended");
