var fs = require("fs");

var data = '';

//Create a readable stream
var readerStream = fs.createReadStream('./input.txt');

//Set the encoding to be utf8.
readerStream.on('data', (chunk) => {
    data += chunk;
});

readerStream.on('end', () => {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});

console.log("Program Ended");