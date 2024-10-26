function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.concat = function () {
    var result = new Dorraymon

    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++
    }

    for (var j = 0; j < arguments.length; j++) {
        result[result.length] = arguments[j]

        for (var i = 0; i < values.length; i++) {
            result[result.length] = value[i]
            result.length++
        }
        result.length++
    }

    return result

}



var names = new Dorraymon
names[0] = 'Jorge'
names[1] = 'Carlos'
names[2] = 'Isabel'
names[3] = 'Elena'
names.length = 4

var surnames = new Dorraymon
surnames[0] = 'Sanchez'
surnames[1] = 'Román'
surnames[2] = 'Runk'
surnames[3] = 'Ayala'
surnames.length = 4

var nicknames = new Dorraymon
nicknames[0] = 'Coque'
nicknames[1] = 'Caico'
nicknames[2] = 'Beby'
nicknames[3] = 'Helen'
nicknames.length = 4

var complet = names.concat(surnames, nicknames)

console.log(names)
// Dorraymon { 0: 'Jorge', 1: 'Carlos', 2: 'Isabel', 3: 'Elena', length: 4]
console.log(surnames)
// Dorraymon { 0: 'Sánchez', 1: 'Román', 2: 'Runk', 3: 'Ayala', length: 4]
console.log(nicknames)
// Dorraymon { 0: 'Coque', 1: 'Caico', 2: 'Beby', 3: 'Helen'}
console.log(complet)
// Dorraymon { 0:'Jorge', 1: 'Carlos', 2: 'Isabel', 3: 'Elena', 4: 'Sánchez', 5: 'Román', 6: 'Runk', 7:'Ayala', 8: 'Coque', 9: 'Caico', 10: 'Beby', 11: 'Helen'}

