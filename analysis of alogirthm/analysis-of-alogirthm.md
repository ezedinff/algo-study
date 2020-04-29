## Asymptotic Analysis
 Analyzing algorithms in terms of input size (we don't measure actual running time).
 We calculate, how does the time (or space) taken by an algorithm increases with the input size.
 for example:
    linear search and binary search in terms of input size. 
    since linear search have linear growth will be slow with growing size of input but binary search have logarithmic growth
   
    // linear search
    linear_search(arr, x) {
        for (const y of arr) {
            if (y === x) {
                return x;
            }
        }
        return -1;
    }
## Worst, Average and Best Cases

### Worst Case Analysis 
    In the worst case analysis, we calculate upper bound on running time of an algorithm.
    We must know the case that causes maximum number of operations to be executed. 
    for example linear search. when item to be searched doesnt exist ...it should search all one by one.
    therefore worst case time complexity would be O(n)
    
### Best Case Analysis (Bogus) 
    In the best case analysis, we calculate lower bound on running time of an algorithm.
    We must know the case that causes minimum number of operations to be executed.
    best case for linear search would if the searchable item comes at first location.
    therefore the best case time complexity would be O(1)
    
**For some algorithms, all the cases are asymptotically same, i.e., there are no worst and best cases. for example merge sort has O(nlogn) for all cases**

## Analysis of Loops
 1. **O(1):** Time complexity of a function (or set of statements) is considered as O(1) if it doesn’t contain loop, recursion and call to any other non-constant time function.
    
    for example: Swap function(has non-recursive and non-loop statements)
    ```
        function swapFunction(x, y) {
            let temp = x;
            x = y;
            y = x;
            return [x, y];
        }
    ```
    
    A loop or recursion that runs a constant number of times is also considered as O(1). For example the following loop is O(1).
    
    ```
    for (let i = 1; i <= c; i++) {
        
    }
    ```
 2. **O(n):** Time Complexity of a loop is considered as O(n) if the loop variables is incremented / decremented by a constant amount.
    
    for example
    ```
     // Here c is a positive integer constant   
       for (let i = 1; i <= n; i += c) {  
            // some O(1) expressions
       }
    
       for (let i = n; i > 0; i -= c) {
            // some O(1) expressions
       }
    ```
 3. **O(n<sup>c</sup>):** Time complexity of nested loops is equal to the number of times the innermost statement is executed. For example the following sample loops have O(n2) time complexity
 
    ```
       for (let i = 1; i <=n; i += c) {
           for (int j = 1; j <=n; j += c) {
              // some O(1) expressions
           }
       }
    
       for (let i = n; i > 0; i -= c) {
           for (int j = i+1; j <=n; j += c) {
              // some O(1) expressions
       }
    ```
 4. **O(*Logn*):** Time Complexity of a loop is considered as O(*Logn*) if the loop variables is *divided / multiplied* by a constant amount.
    
    ```
       for (let i = 1; i <=n; i *= c) {
           // some O(1) expressions
       }
       for (let i = n; i > 0; i /= c) {
           // some O(1) expressions
       }
    ```
 5. **O(*LogLogn*):** Time Complexity of a loop is considered as O(*LogLogn*) if the loop variables is reduced / increased ***exponentially*** by a constant amount.
    ```
        // Here c is a constant greater than 1   
       for (let i = 2; i <=n; i = Math.pow(i, c)) { 
           // some O(1) expressions
       }
    ```
### How to combine time complexities of consecutive loops?
When there are consecutive loops, we calculate time complexity as sum of time complexities of individual loops.
```
       for (let i = 1; i <=m; i += c) {  
            // some O(1) expressions
       }
       for (let i = 1; i <=n; i += c) {
            // some O(1) expressions
       }
       // Time complexity of above code is O(m) + O(n) which is O(m+n)
       // If m == n, the time complexity becomes O(2n) which is O(n).  
```