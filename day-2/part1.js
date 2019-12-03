var fs = require('fs');

var ints = [];
fs.readFileSync('input.txt', 'utf-8').split(',').forEach(function (i) {
    ints.push(Number(i));
});
var index = 0;

ints[1] = 12;
ints[2] = 2;
while(ints[index] !== 99) {
    if(ints[index] === 1) {
        ints[ints[index + 3]] = ints[ints[index + 1]] + ints[ints[index + 2]];
    } else if(ints[index] === 2) {
        ints[ints[index + 3]] = ints[ints[index + 1]] * ints[ints[index + 2]];
    }

    index += 4;
}

console.log(ints[0]);
