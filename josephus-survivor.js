const LinkedList = require('./linked-list');

function find_survivor(num, skip) {
  let list = new LinkedList(Array.from({length: num}, (v,i) => i+1));

  let currentMem = list.tail;
  let previousMem;
  count = 0;
  while (list.length > 1) {
  // while (count < 15) {
    // console.log(count)
    // console.log("previousMem", previousMem);
    // console.log("currentMem", currentMem);

    if (count ===  skip) {
      // console.log("skip met");
      previousMem.next = currentMem.next;
      list.length--;
      count = 0;
    } else {
      previousMem = currentMem;
    }
    currentMem = currentMem.next || list.head;
    count++;
  }
  return currentMem.val;
}

module.exports = find_survivor;