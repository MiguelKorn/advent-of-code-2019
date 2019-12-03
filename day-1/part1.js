var fs = require('fs');

var total = 0;
fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    var mass = Number(line);
    total += Math.floor(mass / 3) - 2;
});

console.log(total);
