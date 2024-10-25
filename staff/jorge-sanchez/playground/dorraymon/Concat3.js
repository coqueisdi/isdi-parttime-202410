function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.concat = function (values, values2) {

    var result = new Dorraymon

    // this -> names : // Dorraymon { 0: 'Jorge', 1: 'Carlos', 2: 'Isabel', 3: 'Elena', length: 4]
    // values -> surnames : // Dorraymon // Dorraymon { 0: 'Sánchez', 1: 'Román', 2: 'Runk', 3: 'Ayala', length: 4
    // result -> Dorraymon { length: 0}


    // result[0] = this[0]   (result --> Dorraymon { 0: 'Jorge', length: 0)
    // result.length++       (result --> Dorraymon { 0: 'Jorge', length: 1)

    // result[1] = this[1]   (result --> Dorraymon { 0: 'Jorge', 1: 'Carlos', length: 1)
    // result.length++       (result --> Dorraymon { 0: 'Jorge', 1: 'Carlos', length: 2)

    // así sucesivamente, por todos los índices de this.

    for (var i = 0; i < this.length; i++) {
        result[i] = this[i]
        result.length++
    }

    // Ahora pasamos a iterar desde el elemento 0 de value, pero continuando numeración de result.

    // result[5] = value[0]   
    // result.length++

    // así sucesivamente, por todos los índices de value

    // result[7] = value[3]    (result --> Dorraymon { 0: 'Jorge', 1: 'Carlos', 2: 'Isabel', 3: 'Elena', 4: 'Sánchez', 5: 'Román', 6: 'Runk', 7: 'Ayala', length: 8}
    // result.length++

    for (var i = 0; i < values.length; i++) {
        result[result.length] = values[i]
        result.length++
    }


    // Ahora iteramos por el segundo value2

    for (var i = 0; i < values.length; i++) {
        result[result.length] = values2[i]
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