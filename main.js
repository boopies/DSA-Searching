//11, 6, 8
//11, 14, 15, 17

//Dewey Decimal System Search

const library = [
    {ddn: 100.594, titles: ['Test One', 'Test Two']},
    {ddn: 200.09, titles: ['Test Three', 'Test Four']},
    {ddn: 300.03984, titles: ['Test Five', 'Test Six']},
    {ddn: 400.2, titles: ['Test Seven', 'Test Eight']},
    {ddn: 500.45, titles: ['Test Nine']},
    {ddn: 600.675, titles: ['Test Ten', 'Test Eleven', 'Test Twelve']},
    {ddn: 700.864, titles: ['Test Thirteen', 'Test Fourteen']},
    {ddn: 800.6, titles: ['Test Fifteen']},
    {ddn: 900.345, titles: ['Test Sixteen', 'Test Seventeen']}
]

console.log(deweySearch(library, 200.09, 'Test Three'));

function deweySearch(library, ddn, title, start=0, end) {
    end = end === undefined ? library.length : end;

    const middle = Math.floor((start+end)/2);

    if (library[middle].ddn === ddn) {
        let currentTitle;
        let i = 0;
        while (currentTitle !== title) {

            if (library[middle].titles.length < i) {
                return 'book is checked out';
            }
            else if (library[middle].titles[i] === title) {
                currentTitle = library[middle].titles[i]
            }
            else {
                i++;
            }
        }
        return `${currentTitle} found`;
    }
    else if(library[middle].ddn > ddn) {
        end = middle -1;
        return deweySearch(library, ddn, title, start, end);
    }
    
    else if (library[middle].ddn < ddn) {
        start = middle +1;
        return deweySearch(library, ddn, title, start, end);
    }
}

//Post-order traversal: 14 19 15 27 25 79 90 91 89 35
//Pre-order traversal: 8 6 5 7 10 9 11

  
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value - value;
        } else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            } else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            } else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove (key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right)
            }
            else {
                this._replaceWith(null)
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error ('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left.findMin();
    }
}

    let BST = new BinarySearchTree();
  
    BST.insert(25, 25);
    BST.insert(15, 15);
    BST.insert(50, 50);
    BST.insert(10, 10);
    BST.insert(24, 24);
    BST.insert(35, 35);
    BST.insert(70, 70);
    BST.insert(4, 4);
    BST.insert(12, 12);
    BST.insert(18, 18);
    BST.insert(31, 31);
    BST.insert(44, 44);
    BST.insert(66, 66);
    BST.insert(90, 90);
    BST.insert(22, 22);
  

  function preOrder(BST) {
    if (BST === null) {
      return;
    }
    console.log(BST.value)
    if(BST.left){
      preOrder(BST.left);
    }
    if(BST.right){
      preOrder(BST.right);
    }
  }
  
  function inOrder(BST){
    if (BST === null) {
      return;
    }
    if(BST.left){
      inOrder(BST.left);
    }
    console.log(BST.value)
    if(BST.right){
      inOrder(BST.right);
    }
  }
  
  function postOrder(BST){
    if (BST === null) {
      return;
    }
    if(BST.left){
      postOrder(BST.left);
    }
    if(BST.right){
      postOrder(BST.right);
    }
    console.log(BST.value)
  }

function commandingOfficer(BST) {
    const values = [];
    const queue = new Queue();
    const node = BST;
    queue.enqueue(node);
    while (queue.first !== null) {
        const node = queue.dequeue(); 
        values.push(node.value); 

        if (node.left) {
            queue.enqueue(node.left);
        }

        if (node.right) {
            queue.enqueue(node.right);
        }
    }
    return values;
}

function maxProfit(trades) {
    let max = 0;
    for (let i = 0; i < trades.length - 1; i++) {
        let tempMax = trades[i] - trades[i + 1];
        if (tempMax > max) {
            max = tempMax;
        }
    }
    return max;
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));

function getNumDrops(eggs, floors) {
    const drops = [
        null, 
        [...Array(floors+1).keys()], 
        ...Array.from(Array(eggs-1), _ => [0, 1])
    ];
    for (let remainingEggs = 2; remainingEggs <= eggs; remainingEggs++) {
        for (let choices = 2; choices <= floors; choices++) {
            let minimum = Infinity;
            for (let dropAt = 1; dropAt <= choices; dropAt++) {
                minimum = Math.min(minimum, 
                    1 + Math.max(drops[remainingEggs-1][dropAt-1],
                                 drops[remainingEggs][choices-dropAt])
                );
            }
            drops[remainingEggs][choices] = minimum;
        }
    }
    return drops[eggs][floors];
}

