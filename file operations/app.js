var file = require('fs');
//file.writeFileSync("./demo.txt","Divya");

var dataFromFile = file.readFileSync("./demo.txt",{encoding:'utf-8'});
console.log(dataFromFile.toString());


