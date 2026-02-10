function createNeighbors(coordinates) {

    let x = coordinates[0];
    let y = coordinates[1];

    const possibleNeighbors = [
    [x+1, y+2],
    [x+2, y+1],
    [x+2, y-1],
    [x-2, y+1],
    [x-2, y-1],
    [x-1, y+2],
    [x-1, y-2],
    [x+1, y-2],
    ];

    const realNeighbors = [];

    for(let i = 0; i < possibleNeighbors.length; i++) {
        let nx = possibleNeighbors[i][0];
        let ny = possibleNeighbors[i][1]
        if(nx >= 0 && nx <= 7 && ny >= 0 && ny <= 7) { 
            realNeighbors.push(possibleNeighbors[i]);
        }   
    }

    return realNeighbors;
}

console.log(createNeighbors([4,3]));

module.exports = { createNeighbors };