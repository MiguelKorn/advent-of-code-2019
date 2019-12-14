var fs = require('fs');

var paths = fs.readFileSync('input.txt', 'utf-8').split(/\r?\n/);
const path1Positions = mapPathPositions(paths[0].split(','));
const path2Positions = mapPathPositions(paths[1].split(','));
let closestIntersection = -1;

function mapPathPositions(path) {
    let positions = [];
    let currentPoint = {x: 0, y: 0};
    for (let p = 0; p < path.length; p++) {
        const cp = path[p];
        const dir = cp.slice(0, 1);
        const amt = Number(cp.slice(1, cp.length));

        for (let i = 1; i < (amt + 1); i++) {
            if (dir === 'U') currentPoint.y--;
            if (dir === 'D') currentPoint.y++;
            if (dir === 'L') currentPoint.x--;
            if (dir === 'R') currentPoint.x++;
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
            const distance = Math.abs(path1.x) + Math.abs(path1.y);
            if(closestIntersection === -1 || distance < closestIntersection) closestIntersection = distance;
        }
    }
}

console.log(closestIntersection);
