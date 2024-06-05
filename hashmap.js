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

    }
    has(key) {

    }
    remove(key) {

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
console.log(hashMap.hash("hiii"));
console.log(hashMap.arrayOfLinkedLists[1]);
console.log(hashMap.entries());