class List {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addFront(val){
        var newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        if(!this.tail){
            this.tail = this.head
        }
        
    }
    addBack(val){
        // needs to be fixed
        // var newNode = new Node(val);
        // if (this.tail){
        //     this.tail.next = newNode;  
        //     this.tail = newNode;
        // } 
        // else {
        //     this.head = newNode;
        //     this.tail = newNode;
        // }
        // if(!this.head){
        //     this.head = this.tail
        // }
        
    }
    popFront(){
        this.head = this.head.next;
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

var our_list = new List();
console.log(our_list);
our_list.addFront(5);
console.log(our_list);
// console.log(our_list);
// our_list.popFront();
// console.log(our_list);
our_list.addFront(7);
console.log(our_list);
// our_list.addBack(3);
// console.log(our_list);
// our_list.addBack(4);
// console.log(our_list);


