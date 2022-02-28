class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class singlyLinkedList{
    constructor(){
        this.length=0;
        this.head=null;
        this.tail=null;
    }
    push(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
            this.length++;
        }
    }
}
let list=new singlyLinkedList();
list.push('the first');
list.push('second');
console.log(list);