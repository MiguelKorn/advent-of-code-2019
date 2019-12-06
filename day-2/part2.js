var fs = require('fs');

var ints = [];
fs.readFileSync('input.txt', 'utf-8').split(',').forEach(function (i) {
    ints.push(Number(i));
});

var value = 0;
var index = 0;
var noun = 0;
var verb = 0;
while (value !== 19690720 && noun <= 99) {
    var arr = [...ints];
    index = 0;
    arr[1] = noun;
    arr[2] = verb;
    while (arr[index] !== 99) {
        if (arr[index] === 1) {
            arr[arr[index + 3]] = arr[arr[index + 1]] + arr[arr[index + 2]];
        } else if (arr[index] === 2) {
            arr[arr[index + 3]] = arr[arr[index + 1]] * arr[arr[index + 2]];
        }

        index += 4;
    }

    value = arr[0];
    console.log(noun, verb, value);

    if (verb++ > 99) {
        verb = 0;
        noun++
    }
}
