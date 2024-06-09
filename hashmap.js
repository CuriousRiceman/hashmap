import { LinkNode, LinkedList } from "./linked-list.js";

class HashMap {
    constructor() {
      this.arrayOfLinkedLists = new Array(this.capacity);
      this.size = 0;
      this.capacity = 16;
      this.loadFactor = 0.75;
    }
    resize() {
      this.size = 0;
      this.capacity += 16;
      let tempArray = this.arrayOfLinkedLists;
      this.arrayOfLinkedLists = new Array(this.capacity);
      for (const list of tempArray) {
        if (list !== undefined) {
          let tempHead = list.head;
          while (tempHead !== null) {
            this.set(tempHead.key, tempHead.value);
            tempHead = tempHead.nextNode;
          }
        }
      }
    }
    hash(key) {
      let hashCode = 0;
          
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      
      if (key < 0 || key >= this.arrayOfLinkedLists.length) {
        throw new Error("Trying to access index out of bound");
      } else {
        return hashCode % 16;
      }
    }
    set(key, value) {
      let hashedKey = this.hash(key);
      if(this.arrayOfLinkedLists[hashedKey] === undefined) {
        this.arrayOfLinkedLists[hashedKey] = new LinkedList;
        this.arrayOfLinkedLists[hashedKey].append(key, value);
        this.size++;
      } else {
        let tempHead = this.arrayOfLinkedLists[hashedKey].head;
        let exists = false;
        while (tempHead !== null && !exists) {
          if (tempHead.key === key) {
            tempHead.value = value;
            exists = true;
          } else {
            tempHead = tempHead.nextNode;
          }
        }
        if (!exists) {
          this.arrayOfLinkedLists[hashedKey].append(key, value);
          this.size++;
        }
        if ((this.size / this.capacity) >= this.loadFactor) {
          this.resize();
        }
      }
    }
    get(key) {
      let hashedKey = this.hash(key);
      if (this.arrayOfLinkedLists[hashedKey] !== undefined) {
        let tempHead = this.arrayOfLinkedLists[hashedKey].head;
        while (tempHead !== null) {
          if (tempHead.key === key) {
            return "Key found: " + tempHead.value;
          } else {
            tempHead = tempHead.nextNode;
          }
        }
      } else {
        return "Key not found: " + null;
      }
    }
    has(key) {
      let hashedKey = this.hash(key);
      if (this.arrayOfLinkedLists[hashedKey] !== undefined) {
        let tempHead = this.arrayOfLinkedLists[hashedKey].head;
        while (tempHead !== null) {
          if (tempHead.key === key) {
            return true;
          } else {
            tempHead = tempHead.nextNode;
          }
        }
      } else {
        return false;
      }
    }
    remove(key) {
      let hashedKey = this.hash(key);
      if (this.arrayOfLinkedLists[hashedKey] !== undefined) {
        let tempHead = this.arrayOfLinkedLists[hashedKey].head;
        let indexOfKey = 0;
        while (tempHead !== null) {
          if (tempHead.key === key) { // Refactored the removeAt() method of the linked list instead
            this.arrayOfLinkedLists[hashedKey].removeAt(indexOfKey);
            return true;
          } else {
            indexOfKey++;
            tempHead = tempHead.nextNode;
          }
        }
      } else {
        return false;
      }
    }
    length() {
      let storedKeys = 0;
      let iteration = 0;
      while (iteration < this.arrayOfLinkedLists.length) {
        if (this.arrayOfLinkedLists[iteration] !== undefined) {
          let tempHead = this.arrayOfLinkedLists[iteration].head;
          while (tempHead !== null) {
            storedKeys++;
            tempHead = tempHead.nextNode
          }
        }
        iteration++;
      }
      return storedKeys;
    }
    clear() {
      this.arrayOfLinkedLists = new Array(16);
    }
    keys() {
      const keysArray = [];
      this.arrayOfLinkedLists.forEach((list) => {
        if (list !== undefined) {
          let tempNode = list.head;
          while (tempNode !== null) {
            keysArray.push(tempNode.key);
            tempNode = tempNode.nextNode;
          }
        }
      });
      return keysArray;
    }
    values() {
      const valuesArray = [];
      this.arrayOfLinkedLists.forEach((list) => {
        if (list !== undefined) {
          let tempNode = list.head;
          while (tempNode !== null) {
            valuesArray.push(tempNode.value);
            tempNode = tempNode.nextNode;
          }
        }
      });
      return valuesArray;
    }
    entries() {
      const entriesArray = [];
      this.arrayOfLinkedLists.forEach((list) => {
        if (list !== undefined) {
          let tempNode = list.head;
          while (tempNode !== null) {
            entriesArray.push([tempNode.key, tempNode.value]);
            tempNode = tempNode.nextNode;
          }
        }
      });
      return entriesArray;
    }
    

}

const hashMap = new HashMap;
hashMap.set("hi", 3); // Index 1, use the word "hi", add 2 "i" to get same hash code for testing
hashMap.set("hiii", 6);
// hashMap.set("hiiiii", 8);
// hashMap.set("hiiiiiii", 10);
// hashMap.set("hiiiiiii", 25);
// hashMap.set("by", 5);
// hashMap.set("ni hao", 10);
// hashMap.set("food", 1000);
// console.log(hashMap.hash("hiii"));
// console.log(hashMap.get("h")); // null
// console.log(hashMap.get("hiii")); // 5
// console.log("Has key? " + hashMap.has("hi")); // true
// console.log("Has key? " + hashMap.has("hii")); // false
// console.log(hashMap.remove("hiiiii")); // true
// console.log(hashMap.length()); // 4 length
// hashMap.clear(); // clear
hashMap.set("h", 7); // 8
hashMap.set("a", 1); // 1
hashMap.set("w", 7); // 7
hashMap.set("b", 2); // 2
hashMap.set("c", 3); // 3
hashMap.set("d", 4);// 4
hashMap.set("e", 5); // 5
hashMap.set("f", 6); // 6
hashMap.set("g", 10000);
hashMap.set("yabababa", 10000);

console.log(hashMap.entries());
console.log(hashMap);
console.log(hashMap.keys());
console.log(hashMap.values());