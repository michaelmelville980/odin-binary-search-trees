
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
}
    