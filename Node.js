
export default class Node{

    constructor(data = null, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    insert(value){
        if(value === this.data) return;

        if(!this.data){
            this.root = new Node(value);
        }else{
            if(value < this.data){
                if(this.left){
                    this.left.insert(value);
                }else{
                    this.left = new Node(value);
                }
            }else if (value > this.data){
                if(this.right){
                    this.right.insert(value);
                }else{
                    this.right = new Node(value);
                }
            }
        }
    }

    deleteItem(value){

        //Value in left subtree (recursive call)
        if(value < this.data){
            if(this.left){
                this.left = this.left.deleteItem(value);
            }
            return this;
        }
        
        //Value in right subtree (recursive call)
        else if (value > this.data){
            if(this.right){
                this.right = this.right.deleteItem(value);
            }
            return this;
        }
        
        //Value is root node
        else if (value === this.data){

            //Root node has no children
            if (!this.left && !this.right){
                return null;
            }

            //Root node has no left child
            else if(!this.left){
                return this.right;
            }

            //Root node has no right child
            else if (!this.right){
                return this.left;
            }

            //Root node has both children
            else{
                let newNode = this.right;
                while(newNode.left){
                    newNode = this.left
                }
                this.data = newNode.data;
                this.right = this.right.deleteItem(newNode.data);
                return this;
            }

        }

    }

    find(value){

        if(this === null){
            return null;
        }
        if(value === this.data){
            return this;
        }else if (value < this.data){
            return this.left.find(value);
        }else if (value > this.data){
            return this.right.find(value);
        }

    }

    levelOrder(callback){

        if (typeof callback !== 'function') {
            throw new Error('Callback function required');
        }

        const queue = [];
        if(this.root){
            queue.push(this.root);
        }

        while(queue.length > 0){
            const node = queue.shift();
            callback(node.data);
            if (node.left){
                queue.push(node.left);
            }
            if (node.right){
                queue.push(node.right);
            }
        }

    }

    inOrder(callback){

        if (typeof callback !== 'function') {
            throw new Error('Callback function required');
        }
        
        if (this.left) {
            this.left.inOrder(callback);
        }
        
        callback(this.data);
        
        if (this.right){
            this.right.inOrder(callback);
        }

    

       
    }

    preOrder(callback){
        
        if (typeof callback !== 'function') {
            throw new Error('Callback function required');
        }

        callback(this.data);
        
        if (this.left) {
            this.left.inOrder(callback);
        }
        
        if (this.right){
            this.right.inOrder(callback);
        }

    }

    postOrder(callback){

        if (typeof callback !== 'function') {
            throw new Error('Callback function required');
        }

        if (this.left) {
            this.left.inOrder(callback);
        }
        
        if (this.right){
            this.right.inOrder(callback);
        }

        callback(this.data);

    }

     height(value){

        let nodeWithValue = this.find(value);

        let leftH;
        let rightH;

        if (!nodeWithValue.left){
            leftH = 0;
        }else{
            leftH = this.height(nodeWithValue.left);
        }

        if (!nodeWithValue.right){
            rightH = 0;
        }else{
            rightH = this.height(nodeWithValue.right);
        }

        return 1 + Math.max(leftH, rightH);

    }


    depth(value){





    }





}
    