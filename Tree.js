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