var fs = require('fs');

var data = "Simply Easy Learning";

//Create a writable stream
var writeStream = fs.createWriteStream('output.txt');

//Write the data to stream with the encoding to be utf8
writeStream.write(data, 'UTF8');

//Mark the end of file
writeStream.end();

//Handle stream events --> finish, and error
writeStream.on('finish', () => {
    console.log('Write completed.');
});

writeStream.on('error', (err) =>{
    console.log(err.stack);
});

console.log('Program Ended');