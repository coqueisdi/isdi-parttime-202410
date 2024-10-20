function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.at = function (index) {
    return this[index]
}

console.log('TEST Dorraymon.prototype.at')

console.log('CASE get branch at index 3')

var branches = new Dorraymon
branches[0] = 'Civil'
branches[1] = 'Criminal'
branches[2] = 'Corporate'
branches[3] = 'Tax'
branches[4] = 'Public'
branches.length = 5
var branch = branches.at(3)
console.log(branch)
// Tax

console.log('CASE get function at index 2')

var funs = new Dorraymon
funs[0] = function () { return 'Zero' }
funs[1] = function () { return 'One' }
funs[2] = function () { return 'Two' }
funs[3] = function () { return 'Three' }
funs.length = 4
var fun = funs.at(2)
console.log(fun())
// Two



console.log('CASE get item at index -2, -3, -1')
var cit = new Dorraymon
cit[0] = { country: "Spain", taxBase: "Gross Income", reductions: "personal", taxRate: 25, deductions: null }
cit[1] = { country: "Germany", taxBase: "Net Income", reductions: "personal", taxRate: 23, deductions: null }
cit[2] = { country: "Italy", taxBase: "Profit", reductions: "objective", taxRate: 23, deductions: 50 }
var jurisdiction = cit.at(-2)
console.log(jurisdiction)
// undefined
console.log(jurisdiction)
// undefined
console.log(jurisdiction)
// undefined


console.log('CASE get branch at index -10')
// probamos que sucede al llamar a un indice negativo inexistente

var cit = new Array
cit[0] = { country: "Spain", taxBase: "Gross Income", reductions: "personal", taxRate: 25, deductions: null }
cit[1] = { country: "Germany", taxBase: "Net Income", reductions: "personal", taxRate: 23, deductions: null }
cit[2] = { country: "Italy", taxBase: "Profit", reductions: "objective", taxRate: 23, deductions: 50 }
var jurisdiction = cit.at(-10)
console.log(jurisdiction(-10))
// undefined



console.log('CASE get branch at index 10')
// probamos que sucede al llamar a un indice positivo inexistente

var cit = new Array
cit[0] = { country: "Spain", taxBase: "Gross Income", reductions: "personal", taxRate: 25, deductions: null }
cit[1] = { country: "Germany", taxBase: "Net Income", reductions: "personal", taxRate: 23, deductions: null }
cit[2] = { country: "Italy", taxBase: "Profit", reductions: "objective", taxRate: 23, deductions: 50 }
var jurisdiction = cit.at(-10)
console.log(jurisdiction(-10))
// undefined