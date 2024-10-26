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
        var values = arguments[j]

        for (var i = 0; i < values.length; i++) {

        }

        result[result.length] = values[j]
        result.length++
    }




    // return result

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
nicknames[0]



var complet = names.concat(surnames, nicknames)

console.log(names)
// Dorraymon { 0: 'Jorge', 1: 'Carlos', 2: 'Isabel', 3: 'Elena', length: 4]
console.log(surnames)
// Dorraymon { 0: 'Sánchez', 'Román', 'Runk', 'Ayala', length: 4]
console.log(complet)
// Dorraymon { 0:'Jorge', 1: 'Carlos', 2: 'Isabel', 3: 'Elena', 4: 'Sánchez', 5: 'Román', 'Runk', 'Ayala']
// NO CONTEMPLA EL SEGUNDO ARGUMENTO! SOLO EL PRIMERO





// CASE OF, hacer la prueba de que lo que concatenas es un Array. Pista: InstanceOf (para valorar si el argument es un Dorraymon)

