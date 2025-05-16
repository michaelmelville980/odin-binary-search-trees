import Node from './Node.js';

export default class Tree {

    constructor(array = null){
        this.array = array;
        this.root = buildTree();
    }

    buildTree(array = []){

        /* Sorting and Filtering Duplicates */
        array.sort((a, b) => a - b); 
        array = array.filter((item, index, arr) =>
            arr.indexOf(item) === index 
        );

        /* Initializing start, end and making sure |tree| !=== 0 (base case) */
        let start = array[0];
        let end = array[array.length - 1];
        if(start > end) return null;

        /* Creating Tree Node*/
        let mid = Math.floor((start + end) / 2);
        let root = new Node(
            array[mid], 
            buildTree(array.slice(start, middle-1)), //Building left subtree
            buildTree(array.slice(middle + 1, end)) //Building right subtree
        );
        return root;

    }
    
}