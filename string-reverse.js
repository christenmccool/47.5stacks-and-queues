/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }
    this.first = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error("Stack is empty"); 

    const val = this.first.val;

    this.first = this.first.next;
    
    if (this.size === 1) {
      this.last = null;
    }

    this.size--;
    return val;
  }
a
  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size === 0) throw new Error("Stack is empty"); 

    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

function stringReverse(str) {
  let stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }

  let reversed = "";
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
}

function isBalanced(str) {
  let stack = new Stack();
  
  const openBrackets = ["[","{","("]
  const closeBrackets = ["]","}",")"]
  const bracketPairs = {"]":"[", "}":"{", ")":"("}

  for (let char of str) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack.isEmpty()) {
        return false;
      } else {
        const prevBracket = stack.pop();
        if (bracketPairs[char] !== prevBracket) {
          return false;
        }
      }
    }
  }

  return stack.isEmpty();

}

module.exports = {Stack, stringReverse, isBalanced};
