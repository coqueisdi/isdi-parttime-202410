console.log('TEST Array.prototyep.concat')

console.log('CASE merge names names and surnames')

var names = ['Jorge', 'Carlos', 'Isabel', 'Elena']
var surnames = ['Sánchez', 'Román', 'Runk', 'Ayala']
var complet = names.concat(surnames)
console.log(complet)
// ['Jorge', 'Carlos', 'Isabel', 'Elena', 'Sánchez', 'Román', 'Runk', 'Ayala']
console.log(names)
// ['Jorge', 'Carlos', 'Isabel', 'Elena']
console.log(surnames)
// ['Sánchez', 'Román', 'Runk', 'Ayala']


console.log('CASE con varios argumentos')

var names = ['Jorge', 'Carlos', 'Isabel', 'Elena']
var surnames = ['Sánchez', 'Román', 'Runk', 'Ayala']
var nicknames = ['Coque', 'Caico', 'Beby', 'Helen']
var complet = names.concat(surnames, nicknames)

console.log(names)
// ['Jorge', 'Carlos', 'Isabel', 'Elena']
console.log(nicknames)
// ['Coque', 'Caico', 'Beby', 'Helen']
console.log(surnames)
// ['Sánchez', 'Román', 'Runk', 'Ayala']

console.log(complet)
// ['Jorge', 'Carlos', 'Isabel', 'Elena', 'Sánchez', 'Román', 'Runk', 'Ayala', 'Coque', 'Caico', 'Beby', 'Helen']
