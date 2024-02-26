/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  /** _get(idx) get the node at idx */
  _get(idx) {
    let currentNode = this.head;
    let count = 0;

    while(count != idx){
      count += 1;
      currentNode = currentNode.next;
    } 

    return currentNode;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else { 
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let node = this.head;
    
    if (!node) return 'LinkedList is empty!'
    
    if (!node.next){
      const removed = node;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return removed;
    }

    while (node.next.next) {
      node = node.next;
    }
    const removed = node.next;
    node.next = null;
    this.tail = node;
    this.length -= 1;
    return removed;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return 'LinkedList is empty!'
    
    if (!this.head.next) {
      this.length -= 1;
      return this.pop();
    }

    const removed = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return removed;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    
    this._get(idx).val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    
    if (idx === 0) {
      this.unshift(val)
    } else if (idx === this.length) {
      this.push(val)
    } else {
      for (let i = 0; i < idx; i++) {
        if (i === idx - 1) {
          let newNode = new Node(val);
          newNode.next = this._get(idx);
          this._get(i).next = newNode;
          this.length += 1;
          return;
        }
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    
    if (idx === 0) {
      this.shift()
    } else if (idx === this.length - 1) {
      this.pop()
    } else {
      for (let i = 0; i < idx; i++) {
        if (i === idx - 1) {
          this._get(i).next = this._get(idx + 1);
          this.length -= 1;
          return;
        }
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode){
      count += currentNode.val;
      currentNode = currentNode.next;
    }

    console.log('Count: ' + count);
    console.log('Length: ' + this.length);
    return count / this.length;
    
  }
}

module.exports = LinkedList;
