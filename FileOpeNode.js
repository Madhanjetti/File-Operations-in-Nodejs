
 const fs=require('fs');
//Async
console.log("Start");
fs.readFile('Node_jsarchitecture.txt',function(err,data){
    if(err){
        console.log("Error",err);
    }
    console.log('Data',data.toString());
    console.log('success');
})
//synch
console.log("end");
console.log("----start----");
const data=fs.readFileSync("Node_jsarchitecture.txt");
console.log(data.toString());
console.log("------end------");
read=open +read
const buf=new Buffer(1024);
fs.open('Node_jsarchitecture.txt','r+',function(err,fd)
{
    if(err){
        console.log("Error in opening file",err);
    }
    else{
        console.log("success in opening file");
    }

fs.read(fd,buf,0,buf.length,0,function(error,bytes){
    if(error){
        console.log("Error in reading file");
    }
    console.log("Success in reading file");
    console.log("Data :",buf.slice(0,bytes).toString());
})
});
writefile
const fs=require('fs');
fs.writeFile('in.txt','updated Madhan',function(err){
    if(err){
        console.log("Error in writing file");
    }
    else{
        console.log("Succesful written");
    }
});
fs.appendFile('in.txt','-Pw skills','utf-8',function(err){
    if(err){
        console.log("Error in appending file");
    }
    else{
        console.log("Success in appending file");
    }
})
fs.unlink('in.txt',function(err){
    if(err){
        console.log("Error in deleting file");
    }
    else{
        console.log("Successfully deleted");
    }
})
fs.close(fd,function(err){
    if(err){
        console.log("Error in closing");
    }
    else{
        console.log("closed file successfull");
    }
})