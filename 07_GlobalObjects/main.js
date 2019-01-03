console.log("File name: " + __filename );
console.log("Directory name: " + __dirname );

//setTimeout
function printHello() {
    console.log( "Hello, World!");
 }

console.log("SetTimeout 2000 example: ");

var timeout = 2000;
var t = setTimeout(() => {
    printHello();
}, timeout);

console.log("ClearTimeot");
clearTimeout(t);

console.log("SetInterval 2000 example: ");
var interval = 2000;
setInterval(printHello, interval);

