const input = "136818-685979";
const min = Number(input.split('-')[0]);
const max = Number(input.split('-')[1]);

let num = min;
let maxNum = 0;
while (num !== max) {
    if (checkNumbersIncrease() && checkForDouble()) maxNum++;
    num++;
}

console.log(maxNum);

function checkForDouble() {
    const n = num.toString();
    let total = 0;
    for (let i = 0; i < n.length - 1; i++) {
        if (n[i] === n[i + 1]) {
            total++;
            i += 2;
        }
    }

    return total !== 0;
}

function checkNumbersIncrease() {
    const n = num.toString();
    for (let i = 0; i < n.length - 1; i++) {
        if (n[i] > n[i + 1]) return false;
    }

    return true;
}