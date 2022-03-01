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
    get(index){
        if(index <0 || index >=this.length)return null;
        var counter=0;
        var current=this.head;
        while(counter !==index){
            current=current.next;
            counter++;
        }
        return current;
       
    }
    set(index,val){
        var foundNode=this.get(index);
        if(foundNode){
            foundNode.val=val;
            return true;
        }
        return false;
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
    insert(index,val){
        if(index <0 || index >this.length)return null;
        if(index===0)return !!this.unshift(val);//!! is used because the unshift/push function did no return a boolean
        if(index===this.length)return !!this.push(val);
        var newNode=new Node(val)
        var prev=this.get(index-1);
        var temp=prev.next;
        prev.next=newNode;
        newNode.next=temp;
        this.length++;
        return true;
    }
    remove(index){
        if(index <0 || index>=this.length)return null;
        if(index===0)return this.shift();
        if(index===this.length-1)return this.pop();
        var prev=this.get(index-1);
        var removedNode=prev.next;
        prev.next=removedNode.next;
        removedNode.next=null;
        this.length--
        console.log(removedNode);
    }
}
let list=new singlyLinkedList();
list.push('the first');
list.push('second');
list.push('third');
list.unshift('zero');
list.push('minizero');
list.shift();
list.get(3);
list.set(2,'newNum');
list.insert(3,'yellow');
list.remove(2);


