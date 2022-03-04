class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val){
        var newNode=new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }
        var temp=this.last;
        this.last=newNode;
        temp.next=newNode;
        this.size++
        return this;
    }
    shift(){
        if(!this.first)return null;
        if(this.size===0){
            this.first=null;
            this.last=null;
        }
        var temp=this.first;
        this.first=temp.next;
        temp.next=null;
        this.size--;
        return temp;
    }
}
var list=new Queue();
list.push('one');
list.push('two');
list.push('three');
list.push('four');
