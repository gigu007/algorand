
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
}

var tree=new binarySearchTree();
tree.insert(13);
tree.insert(29);
tree.insert(8);
tree.insert(4);
tree.insert(35);
tree.insert(35);
tree.insert(29);
