const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
      return this.treeRoot;
  }

  add(data) {
    this.treeRoot = addItem(this.treeRoot, data);

    function addItem(node, data){
      if(!node) return new Node(data);
      if(node.data === data) return node;
      data < node.data ? node.left = addItem(node.left, data) : node.right = addItem(node.right, data);
      return node;
    }
  }

  has(data) {
   return searchItem(this.treeRoot, data);

   function searchItem(node, data){
      if(!node) return false;
      if(node.data === data) return true;
      return data < node.data ? searchItem(node.left, data) : searchItem(node.right, data);
   }
  }

  find(data) {
    return findItem(this.treeRoot, data);

    function findItem(node, data){
        if(!node) return null;
        if(node.data === data) return node;
        return data < node.data ? findItem(node.left, data) : findItem(node.right, data);
    }
  }

  remove(data) {
    this.treeRoot = removeItem(this.treeRoot, data);

    function removeItem(node, data){
      if (!node) return null;
      if (data < node.data) {
        node.left = removeItem(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeItem(node.right, data);
        return node;
      } else {
      
          if (!node.left && !node.right) {
            return null;
          }

          if (!node.left) {
            node = node.right;
            return node;
          }
          if (!node.right) {
            node = node.left;
            return node;
          }

          let rightMin = node.right;
          while (rightMin.left){
            rightMin = rightMin.left;
          }
          node.data = rightMin.data;
          node.right = removeItem(node.right, rightMin.data);
          return node;
      }
     
    }
  }

  min() {
      if (!this.treeRoot) {
        return;
      }
      let node = this.treeRoot;
      while(node.left){
        node = node.left;
      }
      return node.data;
    }

  max() {
      if (!this.treeRoot) return;
      let node = this.treeRoot;
      while(node.right){
        node = node.right;
      }
      return node.data;
    }
  }


module.exports = {
  BinarySearchTree
};