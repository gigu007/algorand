class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}
class doublyLinklyList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    unshift(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            var oldhead=this.head;
            newNode.next=oldhead;
            this.head=newNode;
            this.head.next=oldhead;
            oldhead.prev=newNode;
        }
        this.length++;
        return this;
    }
    push(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            var oldTail=this.tail;
            this.tail.next=newNode;
            this.tail=newNode;
            newNode.prev=oldTail;

        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head)return null;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{
           var poppedNode=this.tail;
           this.tail=poppedNode.prev;
           poppedNode.prev=null;

           
        }
        this.length--;
        return poppedNode
    }
    shift(){
        if(!this.head)return null;
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
        return oldhead;
    }
    get(index){
        if(index<0||index>=this.length)return null;
        var count=0;
        var current=this.head;
        while(count !==index){
            current=current.next;
            count++;
        }
        return current;
    }
    set(index,val){
       
        if(index===0)return this.unshift(val);
        if(index===this.length)return this.push(val);
        var foundNode=this.get(index);
        if(foundNode){
            foundNode.val=val;
          return  true;
        }
        return false;
        
    }
    insert(index,val){
        var newNode=new Node(val);
        if(index===0)return !!this.unshift(val);
        if(index<0||index>this.length)return null;
        if(index===this.length)return !!this.push(val);
        else{
            var prev=this.get(index-1);
            var temp=prev.next;
            prev.next=newNode;
            newNode.next=temp;
            temp.prev=newNode;
            newNode.prev=prev;

        }
        this.length++;
        return this;
    }
}
var list=new doublyLinklyList();
list.unshift('first');
list.unshift('second');
list.push('third');
list.push('fourth');
list.insert(1,'newFirst');
