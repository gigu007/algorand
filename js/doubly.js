class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}
class doublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;

    }
    push(val){
        var newNode=new Node(val);
        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }
        else{

        
        
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        }
        this.length++;
        return this;
    }
    unshift(val){
        var newNode=new Node(val);
        if(this.length===0){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
           this.head.prev=newNode;
           newNode.next=this.head;
           this.head=newNode;
        }
        this.length++;
        return this;
        
    }
    pop(){
        
        if(this.length===0)return undefined;
        var poppedNode=this.tail;
        if(this.lenth===1){
            this.head=null;
            this.tail=null;
        }
        
        else{
            
            this.tail=poppedNode.prev;
            this.tail.next=null;
            poppedNode.prev=null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
       if(!this.head)return undefined;
       var poppedNode=this.head;
       if(this.length===1){
           this.head=null;
           this.tail=null;
       }
       else{
           this.head=poppedNode.next;
           this.head.prev=null;
           poppedNode.next=null;
       }
       this.length--;
       return poppedNode;
    }
    

}

var list=new doublyLinkedList();
list.push(1);
list.push(2);
list.unshift('zero');
list.pop();