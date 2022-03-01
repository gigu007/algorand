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
    shift(){
        if(!this.head)return undefined;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{
           
            
            var oldhead=this.head;
            this.head=oldhead.next;
            oldhead.next=null;

           
        }
        this.length--;
        console.log(oldhead);
         
        
        

    }
    pop(){
        if(!this.head)return null;
        var current=this.head;
        var newTail=current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        return current;
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
list.push('minizero');
list.shift();
