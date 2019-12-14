var fs = require('fs');

var paths = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
const path1 = paths[0].split(',');
const path2 = paths[1].split(',');
const path1Positions = mapPathPositions(path1);
const path2Positions = mapPathPositions(path2);
const intersections = [];

function mapPathPositions(path, position) {
    let positions = [];
    let currentPoint = {x: 0, y: 0};
    let steps = 0;
    for (let p = 0; p < path.length; p++) {
        const cp = path[p];
        const dir = cp.slice(0, 1);
        const amt = Number(cp.slice(1, cp.length));

        for (let i = 1; i < (amt + 1); i++) {
            if (dir === 'U') currentPoint.y--;
            if (dir === 'D') currentPoint.y++;
            if (dir === 'L') currentPoint.x--;
            if (dir === 'R') currentPoint.x++;
            if(position) {
                steps++;
                if (currentPoint.x === position.x && currentPoint.y === position.y) {
                    return steps;
                }
            }
            positions.push({...currentPoint});
        }
    }

    return positions;
}

for (let i = 0; i < path1Positions.length; i++) {
    const path1 = path1Positions[i];
    for (let j = 0; j < path2Positions.length; j++) {
        const path2 = path2Positions[j];
        if(path1.x === path2.x && path1.y === path2.y) {
            intersections.push({...path1});
        }
    }
    console.log(`${(i+1)/1000}/${(path1Positions.length)/1000}`);
}

let lowestSteps = -1;
for (let i = 0; i < intersections.length; i++) {
    const path1Steps = mapPathPositions(path1, intersections[i]);
    const path2Steps = mapPathPositions(path2, intersections[i]);
    const total = path1Steps + path2Steps;
    if(lowestSteps === -1 || total < lowestSteps) lowestSteps = total;
}

console.log(lowestSteps);
