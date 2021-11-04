const {Stack, stringReverse, isBalanced} = require("./string-reverse");

describe("string reverse", function() {
  it("string reverse", function() {
    let test = stringReverse('cat');
    expect(test).toBe('tac');
  });
});

describe("string isBalanced", function() {
  it("string isBalanced", function() {
    expect(isBalanced('hello')).toBe(true);
    expect(isBalanced('(hi) [there]')).toBe(true);
    expect(isBalanced('(hi [there])')).toBe(true);
    expect(isBalanced('(((hi)))')).toBe(true);

    expect(isBalanced('(hello')).toBe(false);
    expect(isBalanced('(nope]')).toBe(false);
    expect(isBalanced('((ok) [nope)]')).toBe(false);
    expect(isBalanced('((hello)')).toBe(false);

  });
});

