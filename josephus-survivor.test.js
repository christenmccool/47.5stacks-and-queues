const find_survivor = require('./josephus-survivor');

describe("josephus survivor", () => {
  it("find survivor with skip of 2", () => {
    expect(find_survivor(10, 3)).toBe(4);
  })
})
