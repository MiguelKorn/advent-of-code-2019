var fs = require('fs');

fs.readFileSync('numbers.txt', 'utf-8').split(/\r?\n/).forEach(function(line){
    console.log(line);
})