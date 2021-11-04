const Deque = require("./deque");

describe("appendleft", () => {
  it("appendleft to empty deque", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);
    
    deque.appendleft(6);
    expect(deque.size).toBe(1);
    expect(deque.first.val).toBe(6);
    expect(deque.last.val).toBe(6);

    expect(deque.first.previous).toBe(null);
    expect(deque.first.next).toBe(null);
    expect(deque.last.previous).toBe(null);
    expect(deque.last.next).toBe(null);

  })

  it("appendleft to non-empty deque", () => {
    let deque = new Deque();
    
    deque.appendleft(6);
    deque.appendleft(10);

    expect(deque.size).toBe(2);
    expect(deque.first.val).toBe(10);
    expect(deque.first.previous).toBe(null);
    expect(deque.first.next.val).toBe(6);

    expect(deque.last.val).toBe(6);
    expect(deque.last.previous.val).toBe(10);
    expect(deque.last.next).toBe(null);
  })

  it("appendleft multiple times", () => {
    let deque = new Deque();
    
    deque.appendleft(6);
    deque.appendleft(10);
    deque.appendleft(4);
    deque.appendleft(25);

    expect(deque.size).toBe(4);
    expect(deque.first.val).toBe(25);
    expect(deque.first.next.val).toBe(4);
    expect(deque.first.next.next.val).toBe(10);
    expect(deque.first.next.next.next.val).toBe(6);

    expect(deque.last.val).toBe(6);
  })
})

describe("appendright", () => {
  it("appendright to empty deque", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);
    
    deque.appendright(6);
    expect(deque.size).toBe(1);
    expect(deque.first.val).toBe(6);
    expect(deque.last.val).toBe(6);

    expect(deque.first.previous).toBe(null);
    expect(deque.first.next).toBe(null);
    expect(deque.last.previous).toBe(null);
    expect(deque.last.next).toBe(null);
  })

  it("appendright to non-empty deque", () => {
    let deque = new Deque();
    
    deque.appendright(6);
    deque.appendright(10);

    expect(deque.size).toBe(2);
    expect(deque.first.val).toBe(6);
    expect(deque.first.previous).toBe(null);
    expect(deque.first.next.val).toBe(10);

    expect(deque.last.val).toBe(10);
    expect(deque.last.previous.val).toBe(6);
    expect(deque.last.next).toBe(null);
  })

  it("appendright multiple times", () => {
    let deque = new Deque();
    
    deque.appendright(6);
    deque.appendright(10);
    deque.appendright(4);
    deque.appendright(25);

    expect(deque.size).toBe(4);
    expect(deque.first.val).toBe(6);
    expect(deque.first.next.val).toBe(10);
    expect(deque.first.next.next.val).toBe(4);
    expect(deque.first.next.next.next.val).toBe(25);

    expect(deque.last.val).toBe(25);
  })
})

describe("popleft", () => {
  it("popleft to empty deque returns error", () => {
    let deque = new Deque();
    expect(() => deque.popleft()).toThrow(Error);
  })

  it("popleft to deque with one node", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);
    
    deque.appendleft(6);

    const res = deque.popleft();

    expect(res).toBe(6);
    expect(deque.size).toBe(0);
    expect(deque.first).toBe(null);
    expect(deque.last).toBe(null);
  })

  it("popleft to deque with one node", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);
    
    deque.appendright(6);

    const res = deque.popleft();

    expect(res).toBe(6);
    expect(deque.size).toBe(0);
    expect(deque.first).toBe(null);
    expect(deque.last).toBe(null);
  })

  it("popleft to deque with multiple nodes", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);
    
    deque.appendright(6);
    deque.appendleft(8);
    deque.appendright(10);
    deque.appendleft(14);
    expect(deque.size).toBe(4);

    const res1 = deque.popleft();
    expect(deque.size).toBe(3);
    expect(res1).toBe(14);
    expect(deque.first.val).toBe(8);
    expect(deque.first.next.val).toBe(6);
    expect(deque.first.next.next.val).toBe(10);
    expect(deque.last.val).toBe(10);

    const res2 = deque.popleft();
    expect(deque.size).toBe(2);
    expect(res2).toBe(8);
    expect(deque.first.val).toBe(6);
    expect(deque.first.next.val).toBe(10);
    expect(deque.last.val).toBe(10);

  })
})

describe("popright", () => {
  it("popright to empty deque returns error", () => {
    let deque = new Deque();
    expect(() => deque.popright()).toThrow(Error);
  })

  it("popright to deque with one node", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);
    
    deque.appendleft(6);

    const res = deque.popright();

    expect(res).toBe(6);
    expect(deque.size).toBe(0);
    expect(deque.first).toBe(null);
    expect(deque.last).toBe(null);
  })

  it("popright to deque with one node", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);
    
    deque.appendright(6);

    const res = deque.popright();

    expect(res).toBe(6);
    expect(deque.size).toBe(0);
    expect(deque.first).toBe(null);
    expect(deque.last).toBe(null);
  })

  it("popright to deque with multiple nodes", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);
    
    deque.appendright(6);
    deque.appendleft(8);
    deque.appendright(10);
    deque.appendleft(14);
    expect(deque.size).toBe(4);

    const res1 = deque.popright();
    expect(deque.size).toBe(3);
    expect(res1).toBe(10);
    expect(deque.first.val).toBe(14);
    expect(deque.first.next.val).toBe(8);
    expect(deque.first.next.next.val).toBe(6);
    expect(deque.last.val).toBe(6);

    const res2 = deque.popright();
    expect(deque.size).toBe(2);
    expect(res2).toBe(6);
    expect(deque.first.val).toBe(14);
    expect(deque.first.next.val).toBe(8);
    expect(deque.last.val).toBe(8);

    const res3 = deque.popright();
    expect(deque.size).toBe(1);
    expect(res3).toBe(8);
    expect(deque.first.val).toBe(14);
    expect(deque.last.val).toBe(14);

    const res4 = deque.popright();
    expect(deque.size).toBe(0);
    expect(res4).toBe(14);
    expect(deque.first).toBe(null);
    expect(deque.last).toBe(null);
  })
})

describe("peekleft", () => {
  it("peekleft to empty deque returns error", () => {
    let deque = new Deque();
    expect(() => deque.peekleft()).toThrow(Error);
  })

  it("return first value", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);

    deque.appendleft(5);
    expect(deque.size).toBe(1);
    const val = deque.peekleft();
    expect(val).toBe(5);
    expect(deque.first.val).toBe(5);
    expect(deque.size).toBe(1);
  })
})

describe("peekright", () => {
  it("peekright to empty deque returns error", () => {
    let deque = new Deque();
    expect(() => deque.peekright()).toThrow(Error);
  })

  it("return first value", () => {
    let deque = new Deque();
    expect(deque.size).toBe(0);

    deque.appendleft(5);
    expect(deque.size).toBe(1);
    const val = deque.peekright();
    expect(val).toBe(5);
    expect(deque.size).toBe(1);
    expect(deque.first.val).toBe(5);
  })
})


describe("isEmpty", () => {
  it("returns true for an empty deque", () => {
    let deque = new Deque();
    expect(deque.isEmpty()).toBe(true);
  })

  it("returns false for a non-empty deque", () => {
    let deque = new Deque();

    deque.appendleft(5);
    expect(deque.isEmpty()).toBe(false);
  })

  it("returns false for a non-empty deque", () => {
    let deque = new Deque();

    deque.appendright(5);
    expect(deque.isEmpty()).toBe(false);
  })
})

