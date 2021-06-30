var http = require('http');
var dt= require("./timedate");
var fs = require("fs");

//for creating files
 fs.writeFile('mynewfile2.txt', 'hello Sanjana, this is your second content', function(err){
     if (err) throw err;
     console.log('Saved!');
 });
 fs.appendFile('mynewfile1.txt', 'Hello Rough content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
//for updating files
fs.writeFile('mynewfile.txt', "hello updated text", function(err){
    if (err) throw err;
});

//for deleting the specified file
fs.unlink('mynewfile1.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  //to rename a file 
  fs.rename("mynewfile2.txt", "renamedfile.txt", function(err){
      if(err) throw err;
  });

//Using the createServer() method to create an HTTP server:
// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/plain'}); //http header with the content type.The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
//     res.write("the date and time are currently: " +dt.myDateTime()); //write a response to the client
//     res.end();//end the response
// }).listen(3200); //the server object listen on port 3200
// console.log("this example is different");

http.createServer(function (req, res) {
    fs.readFile('read.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);
  
