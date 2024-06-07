import { LinkNode, LinkedList } from "./linked-list.js";

class HashMap {
    constructor() {
      this.arrayOfLinkedLists = new Array(16);
    }
    hash(key) {
      let hashCode = 0;
          
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
    
      return hashCode % 16;
    }
    set(key, value) {
      // Figure out how to logic for load factor and rehashing function
      let hashedKey = this.hash(key);
      if(this.arrayOfLinkedLists[hashedKey] === undefined) {
        this.arrayOfLinkedLists[hashedKey] = new LinkedList;
        this.arrayOfLinkedLists[hashedKey].append(key, value);
      } else {
        this.arrayOfLinkedLists[hashedKey].append(key, value);
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

    }
    clear() {

    }
    keys() {

    }
    values() {

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
hashMap.set("hiiiii", 8);
hashMap.set("hiiiiiii", 10);
// console.log(hashMap.hash("hiii"));

// console.log(hashMap.get("h")); // null
// console.log(hashMap.get("hiii")); // 5
// console.log("Has key? " + hashMap.has("hi")); // true
// console.log("Has key? " + hashMap.has("hii")); // false
// console.log(hashMap.remove("hiiiii")); // true

console.log(hashMap.entries());
hashMap.arrayOfLinkedLists[1].toString();

console.log();