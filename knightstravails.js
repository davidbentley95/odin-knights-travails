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

function knightMoves(start, end) {

    const queue = [start];
    const visited = new Set();
    const parentMap = new Map();
    const results = [];

    visited.add(start.join(','));

    if(start.join(',') === end.join(',')) {
        results.push(start);
        return results;
    }

    while (queue.length !== 0) {

        //get current target
        let current = queue.shift();

        //check if current target is end
        //if it is, then reconstruct the parent path
        if(current[0] === end[0] && current[1] === end[1]) {
            results.unshift(current);
            while(true) {
                current = parentMap.get(current);
                results.unshift(current);
                if(current.join(',') === start.join(',')) {
                    return results; 
                }
            }
        }
        
        //create current target's neighbors
        let neighbors = createNeighbors(current);
        
        //for each neighbor, check if they have been visited
        //if not, add to queue and add parent mapping
        //also add to visited now to stop shared spaces from being
        //added on next queued item (ie 1,2 and 2,1 share 3,3 as a neighbor)
        neighbors.forEach(item => {
            const key = item.join(",");
            if(!visited.has(key)) {
                visited.add(key);
                queue.push(item);
                parentMap.set(item, current);
            }
        })
    }
    return results;
}

console.log(knightMoves([0,0], [7,7]));
