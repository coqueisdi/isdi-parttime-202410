console.log('TEST Array.prototype.pop')



console.group('CASE take out last index')

var pizza = new Array
pizza[0] = 'Tomato'
pizza[1] = 'Mozzarella'
pizza[2] = 'Oregano'
pizza[3] = 'Banana'
pizza[4] = 'Apple'

console.log(pizza.pop())
// Apple

console.log(pizza)
// ['Tomato', 'Mozzarella', 'Oregano', 'Banana']


