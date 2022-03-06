
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
    
}
class binarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        
        var newNode=new Node(value);
        // var count=0;
        if(!this.root){
            this.root=newNode;
            return this;  
        }
        
        else{
            var current=this.root;
            while(true){
                if(value<current.value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }
                    else{
                        current=current.left;
                    }
                   
                }
                else if(value===current.value){
                    
                    var count=0;
                    count+=1;
                    return count;
                    
                }
                else if(value>current.value){
                    if(current.right===null){
                        current.right=newNode;
                        return this;
                    }
                    else{
                        current=current.right;
                    }
                }
            }
        }
        
    }
    find(value){
        if(!this.root)return false;
        var current=this.root;
        var found=false;
        while(current && !found){
            
            if(value<current.value){
                current=current.left;
                
            }
          else  if(value>current.value){
                current=current.right;
               
            }
            else{
                return true;
            }
            
            
        
        }
        
        return current;
    }
    bfs(){
        var node=this.root,
          data=[],
          queue=[];
          queue.push(node);
          while(queue.length){
              node=queue.shift();
              data.push(node.value);
              if(node.left){
                  data.push(node.left);
              }
              if(node.right){
                  data.push(node.right)
              }
          }
          return data;
    }
    dfsPre(){
        var data=[];
        var current=this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left)traverse(node.left);
            if(node.right)traverse(node.right);
        }
        traverse(current);
        return data;
    }
    dfsPost(){
        var data=[];
        var current=this.root;
        function traverse(node){
        if(node.left)traverse(node.left);
        if(node.right)traverse(node.right);
        data.push(node.value);
        traverse(current);
        }
        return data;
    }
}

var list=new binarySearchTree();
list.insert(13);
list.insert(29);
list.insert(8);
list.insert(4);
list.insert(45);
list.insert(67);

