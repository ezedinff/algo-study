// Hash table //
// is an associative array container that provide O(1) insert, delete, search operations
// key and value types don't have to be the same
// to function it requires hash function

// Hash Function
// A function that maps data of arbitrary size to data of fixed size.
// Used in
// - to verify downloaded file
// - to hash passwords
// - hash table key lookup

// for a function to suitable hash function it has to have 3 properties
// - stability - for a given input always returns same output
// - uniformity - a hash function will distribute the hash values it generates uniformly across its space
//              - shifting values should give different output.
// - security - it shouldn't be easy to determine the value that results.

// Hash collision
// occurs when two distinct keys would be inserted to the same hash table index.
// how to resolve the collision
// separate chaining algorithm - collisions in hash table chained together into a linked list
//                               whose root node is the hash table array entry.
// hash table has linked list to store collisions
//
// Fill Factor
// the percentage of capacity that representing the maximum number of entries before the table grow.
// example
// if the array has 100 indexes and fill factor is 0.80.
// once the array filled with 80 items. the array is going to grow.
// that doesn't mean 80 indexes are full
// but just the hash table contains 80 items

// Growth Factor
// the multiple to increase the capacity of hash table when the fill factor has been exceeded
// if the growth factor is 2. we double the size of the array.
// if the growth factor is 1.5. the array size will grow by 50%

// when growing the hash table several steps has to be taken.
// -> use the fill factor to determine if the growth is needed.
// -> use the growth factor to allocate a larger array
// -> determine the new indexes for existing items in the hash table array.
//     and we'll rehash each of those items into new array.
// 
// hash table can be used as caching layer for speeding up operations but have higher memory demand
// you should know for what you're optimizing for.
// time vs memory?