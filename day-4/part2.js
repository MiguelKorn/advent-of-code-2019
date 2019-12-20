const input = "136818-685979";
const min = Number(input.split('-')[0]);
const max = Number(input.split('-')[1]);

let num = min;
let maxNum = 0;
while (num !== max) {
    if (check()) maxNum++;
    num++;
}

console.log(maxNum);

function check() {
    const n = num.toString();
    let nums = [];
    for (let i = 0; i < n.length; i++) {
        if (n[i] > n[i + 1]) return false;
        if(nums[n[i]] === undefined) nums[n[i]] = 1;
        else nums[n[i]]++;
    }

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === 2) return true;
    }

    return false;
}