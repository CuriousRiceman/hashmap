// Pulled the necessary code from previous linked list project
export class LinkNode {
    constructor(key, value, nextNode = null) {
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
    getKey() {
        return this.key;
    }
    getValue() {
        return this.value;
    }
    setKey(key) {
        this.key = key;
    }
    setValue(value) {
        this.value = value;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(key, value) { // set(key, value)
        if (this.head === null && this.tail === null) {
            let data = new LinkNode(key, value);
            this.head = data;
            this.tail = data;
        } else {
            let data = new LinkNode(key, value);
            this.tail.nextNode = data;
            this.tail = data;
        }
    }
    at(index) { // Get(key)
        let tempHead = this.head;
        let instance = 0;
        while(tempHead !== null && instance < index) {
            tempHead = tempHead.nextNode;
            instance++;
        }
        if(tempHead === null) {
            return "Index does not exist";
        } else {
            return "Node at index " + index + " is " + tempHead.value;
        }
    }
    find(value) { // has(key)
        let tempHead = this.head;
        let found = false;
        let index = 0;
        while(tempHead !== null) {
            if(tempHead.value === value) {
                found = true;
                break;
            }
            index++;
            tempHead = tempHead.nextNode;
        }
        if(!found) {
            return false;
        } else {
            return true;
        }

    }
    removeAt(index) {
        let tempHead = this.head;
        let indexToMatch = 0;
        let previousNode = null;
        let followingNode = null;
        while (index > indexToMatch) {
            indexToMatch++;
            previousNode = tempHead;
            tempHead = tempHead.nextNode;
            followingNode = tempHead.nextNode;
        }
        previousNode.nextNode = followingNode;
    }
    getSize() { // length() of hash map
        let length = 0;
        let tempHead = this.head;
        while (tempHead !== null) {
            length++;
            tempHead = tempHead.nextNode;
        }
        console.log("Size of linked list is " + length);
    }
    // Write a clear() for hashmap
    // keys(), values(), entries(), figure logic for this
    toString() {
        let tempHead = this.head;
        while (tempHead !== null) {
            process.stdout.write("( " + tempHead.value + " ) -> "); // process.stdout.write will make it print on same line
            tempHead = tempHead.nextNode;
            
        }
        process.stdout.write("" + tempHead);
    }
}
