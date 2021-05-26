// Tree is data structure where nodes have 1:N parent child relationship
// each node have at most one parent, but
// the number of children depends on the type of tree
// root -> branches -> leaves [all kinda these node contain exactly one data item]
// root is a node in a tree which is single point of entry
// root have no parent
// tree have limit on number of children they may have. which is called degree of tree
// leaves where the tree ends. nodes that have no children known as leaf of the tree
// 
// file system is an example of tree

// trees are efficient on accessing and storing data

// Binary Trees //
// is a tree structure. a node may have at most 2 children
// connections made between nodes are edges
// degree is 2
// leaf has height of 0. level of 3
//          [B] __ [D]
//        /    \
//     /        \
//  [A]           [E]
//    \     [F]
//     [C]/
//          
// Binary Search Tree //
// nodes with lesser values are stored to left to root,
// and node with value equal and greater to root node placed to the right
// greater value will be found to the right most node
// smaller value will be found to the left most node
// insertion complexity 
// average: O(log(n)) || worst: O(n) (in the case of unbalanced tree, is there balancing algorithms?)
// Traversal Operations (the order we do these operations impact the value we get at the end)
// -> visit left child
// -> visit right child
// -> process the current value
//
// Tree Traversals
// all of these operations done recursively
// -> pre-order - the node visited before its children
//              - Common usage would be to copy the tree  
//
// -> in-order - is where the left node side is visited before the node, then right child
//             - LEFT(do some action) -> NODE(do some action) -> RIGHT(do some action)
//             - from least to greatest
//
// -> post-order - left and right side are visited before the node