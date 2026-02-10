const { createNeighbors } = require("./knightstravails")


test("2 neighbors", () => {
    expect(createNeighbors([0,0])).toEqual([[1,2],[2,1]]);
});

test("8 neighbors", () => {
  const neighbors = createNeighbors([4, 3]);

  expect(neighbors).toHaveLength(8);
  expect(neighbors).toEqual(
    expect.arrayContaining([
      [2, 2], [2, 4], [3, 5], [5, 5],
      [6, 4], [6, 2], [5, 1], [3, 1],
    ])
  );
});