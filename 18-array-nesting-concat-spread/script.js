let x

const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'raspberry']

// Push adds an array to another array
// fruits.push(berries)

// x = fruits[3][1]

const allFruits = [fruits, berries]

x = allFruits[1][0]

// Concat makes arrays a part of the other 
x = fruits.concat(berries)

// Spread Opertator
x = [...fruits, ...berries]

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8]

x = arr.flat()

//Static methods on array object

x = Array.isArray(fruits)

x = Array.from('12345')

const a = 1
const b = 2
const c = 3

x = Array.of(a, b, c)

console.log(x)