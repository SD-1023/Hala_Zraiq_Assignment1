    const Node = require('./Node');
    class DoublyLinkedList {
            constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0; 
            }
        ///   Adds a new node with the given value to the end of the list.
        push(val) {
            const newNode = new Node(val);  
            if (!this.head) {
              this.head = newNode;
              this.tail = newNode;
            } else {
              newNode.prev = this.tail;
              this.tail.next = newNode;
              this.tail = newNode;
            }
            this.length++; 
          }
          
          
     // Removes and returns the last node from the list.
            pop(){
                if (this.length === 0)return undefined; 
                const newNode = this.tail;
                if (this.length==1){
                    this.head=null;
                    this.tail=null;
                }else{
                    this.tail=newNode.prev;
                    this.tail.next=null;
                    newNode.next=null;

                }
                this.length--;
                return newNode.value;

            } 
            
     // Removes and returns the first node from the list.

          shift(){
          if (this.length === 0)return undefined; 
          const newNode = this.head;
          if (this.length==1){
            this.head=null;
            this.tail=null;

          }else{
            this.head=newNode.next;
            this.head.prev=null;
            newNode.next=null;

          }
          this.length--;
          return newNode.value;
          
         }
         
      //Adds a new node with the given value to the beginning of the list.
      unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++; 
     }
     //Retrieves the node at the specified index.
     get(index) {
        if (index < 0 || index >= this.length) return undefined;
    
        let current;
        if (index <= this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev;
            }
        }
    
        return current;
      }
      //Updates the value of the node at the specified index.
      set(index, val) {
        const node = this.get(index);
        if (node) {
            node.value = val;
            return true;
        }
        return false;
     }
     //Inserts a new node with the given value at the specified index.
     insert(index, val) {
        if (index < 0 || index > this.length) return false;
    
        if (index === 0) {
            this.unshift(val);
        } else if (index === this.length) {
            this.push(val);
        } else {
            const newNode = new Node(val);
            const beforeNode = this.get(index - 1);
            const afterNode = beforeNode.next;
    
            newNode.prev = beforeNode;
            newNode.next = afterNode;
            beforeNode.next = newNode;
    
            if (afterNode) {
                afterNode.prev = newNode;
            }
    
            this.length++;
        }
    
       
         return true;
        }
        remove(index) {
            if (index < 0 || index >= this.length) return undefined;
          
            if (index === 0) {
              return this.shift();
            } else if (index === this.length - 1) {
              return this.pop();
            } else {
              const removedNode = this.get(index);
              const beforeNode = removedNode.prev;
              const afterNode = removedNode.next;
          
              beforeNode.next = afterNode;
              afterNode.prev = beforeNode;
          
              removedNode.prev = null;
              removedNode.next = null;
              this.length--;
          
              return removedNode.value;
            }
          }
            
    }
    


       

    






    
           
    
    
    module.exports = DoublyLinkedList;
    