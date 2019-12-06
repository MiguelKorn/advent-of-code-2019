var fs = require('fs');

var total = 0;
fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    var mass = Number(line);
    total += calcFuel(mass);
});

console.log(total);

function calcFuel(fuel) {
    var total = 0;

    fuel = Math.floor(fuel / 3) - 2;
    while(fuel > 0) {
        total += fuel;
        fuel = Math.floor(fuel / 3) - 2;
    }

    return total;
}
