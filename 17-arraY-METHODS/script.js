let x

const arr = [34, 55, 95, 20, 15]

// // Add to array at end
// arr.push(100)

// // remove from end
// arr.pop()

// // Add to beginning
// arr.unshift(99)

// // Remove from beggining
// arr.shift()

// // Reverse the array
// arr.reverse()

x = arr.includes(20)

x = arr.indexOf(340)

x = arr.slice(1, 4)

// x = arr.splice(1, 4)
// x = arr.splice(3, 1)

x = arr.splice(1, 4).reverse().toString().charAt(0)

console.log(x)