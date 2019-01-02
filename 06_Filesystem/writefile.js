var fs = require("fs");

console.log("Going to write into existing file.");

fs.writeFile('input.txt', 'Simply Easy Learning!', (err) =>{
    if (err){
        return console.error(err);
    }

    console.log("Data written succesfully!");
    console.log("Let's read newly written data.");

    fs.readFile('input.txt', (err, data) =>{
        if (err){
            return console.error(err);            
        }
        console.log("Asynchronous data: " + data.toString());
    });
});