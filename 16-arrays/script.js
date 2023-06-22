let x

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102]

// Array Constructor

const fruits = new Array('apple', 'grape', 'orange')

x = numbers[0] + numbers[3]

x = `My favorite fruit is an ${fruits[2]}`

x = numbers.length

fruits[2] = 'pear'

x = fruits

// fruits.length = 2

fruits[fruits.length] = 'blueberry'
fruits[fruits.length] = 'peach'

console.log(x)