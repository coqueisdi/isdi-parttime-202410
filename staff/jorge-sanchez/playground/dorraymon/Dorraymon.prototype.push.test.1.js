
function Dorraymon() {
    return this.length = 0
}

Dorraymon.prototype.push = function (element) {
    this[this.length] = element
    this.length++ // this.length = this.lentgh + 1 // this.length += 1
    return this.length
}


console.log('TEST Array.prototype.push')



console.log('CASE add Company to Debtors List')

var companies = new Array
companies[0] = 'Fraude, S.A.'
companies[1] = 'Paga paga, S.L.'
companies[2] = 'Sin Panoja, S.L.'
companies[3] = 'Aquí no hay Monga'
companies.length = 4
var lenght = companies.push('Paquito sin paguita')
console.log(length)
// 5
console.log(companies)
// [ 'Fraude, S.A.', 'Paga paga, S.L.', 'Sin Panoja, S.L.', 'Aquí no hay Monga', 'Paquito sin paguita' ]



console.log('CASE add various html tags')

var tags = new Array
tags[0] = 'html'
tags[1] = 'head'
tags[2] = 'body'
var length = tags.push('h1', 'p', 'table', 'img', 'video')
console.log(length)
// 8
console.log(tags)
// ['html', 'head', 'body', 'h1', 'p', 'table', 'img', 'video']



console.log('CASE add various arrays into nums')

var nums = new Array
var length = nums.push([1, 2, 3], [4, 5], [6], [], [7], [8, 9, 10, 11])
console.log(length)
// 6
console.log(nums)
// [[1, 2, 3], [4, 5], [6], [], [7], [8, 9, 10, 11]]
console.log(nums[0][2])
// 3
var length = nums[0].push(12, 13)
console.log(length)
// 5
console.log(nums[0])
// [1, 2, 3, 12, 13]
console.log(nums.length)
// 6
console.log(nums)
// [[1, 2, 3, 12, 13], [4, 5], [6], [], [7], [8, 9, 10, 11]]
var length = nums[1].push([14, 15, 16])
console.log(length)
// 3
console.log(nums[1])
// [4, 5, [14, 15, 16]]
console.log(nums.length)
// 6
console.log(nums)
// [[1, 2, 3, 12, 13], [4, 5, [14, 15, 16]], [6], [], [7], [8, 9, 10, 11]]
console.log(nums[1][2][1])
// 15