class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}
class Stack{
    constructor(){
        this.size=0;
        this.first=null;
        this.last=null;
    }
    push(val){
        var newNode=new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }
       
        var temp=this.first;
        this.last=newNode;
        temp.next=newNode;
        this.size++
        return this;
    }
    pop(){
        if(!this.first)return null;
        if(this.size===1){
            this.first=null;
            this.last=null;
        }
        var current=this.first;
        var newLast=current;
        while(current.next){
            newLast=current;
            current=current.next;
            
        }
        this.last=newLast;
        newLast.next=null;
        this.size--;
        return current;


    }
    get(index){
        if(index<0||index>=this.size)return undefined;
        var count=0;
        var current=this.first;
        while(count !==index){
            current=current.next;
            count++;
        }
        return current;
    }
}
var list=new Stack();
list.push('first');
list.push('second');
list.push('third');
list.pop();