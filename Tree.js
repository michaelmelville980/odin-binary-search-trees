import Node from './Node.js';

export default class Tree {

    constructor(array = []){
        this.array = this.prepArray(array);
        this.root = this.buildTree(this.array);
    }

    /* Sorts and Filters Duplicates from Array*/
    prepArray(array = []){
        array.sort((a, b) => a - b); 
        array = array.filter((item, index, arr) => arr.indexOf(item) === index );
        return array;
    }

    /* Builds Tree and Returns Root Node */
    buildTree(array = []){

        if(array.length === 0) return null;

        let start = 0;
        let end = array.length;
        let mid = Math.floor((start + end) / 2);

        return new Node(
            array[mid],
            this.buildTree(array.slice(start, mid)),
            this.buildTree(array.slice(mid + 1, end)),
        );
    }

    insert(value){

        /* Node with no children */
        if (this.left === null && this.right === null){
            if (value < this.data){
                this.left = new Node(value);
            }else if (value > this.data){
                this.right = new Node(value);
            }
        }

        /* Node with only left child*/
        else if (this.left !== null && this.right === null){
            if (value < this.data){
                this.left.insert(value);
            }else if (value > this.data){
                this.right = new Node(value)
            }
        }

        /* Node with only right child */
        else if (this.left === null && this.right !== null){
            if (value < this.data){
                this.left = new Node(value);
            }else if (value > this.data){
                this.right.insert(value);
            }
        }

        /* Node with both children */
        else {
            if (value < this.data){
                this.left = this.left.insert(value);
            }else if (value > this.data){
                this.right = this.right.insert(value);
            }
        }

    }


    deleteItem(value){

    }

    find(value){
        return Node;
    }

    levelOrder(callback){

    }

    inOrder(callback){

    }

    preOrder(callback){

    }

    postOrder(callback){

    }

    height(value){

    }

    depth(value){

    }

    isBalanced(){

    }

    rebalance(){

    }

}