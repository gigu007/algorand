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
           
            
        }
        this.length++;
        return this;
    }
    unshift(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode
        }
        this.length++;
        return this;
    }
}
let list=new singlyLinkedList();
list.push('the first');
list.push('second');
list.push('third');
list.unshift('zero');
list.push('mnizero');
console.log(list);