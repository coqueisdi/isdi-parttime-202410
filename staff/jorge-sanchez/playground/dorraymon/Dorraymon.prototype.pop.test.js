function Dorraymon() {
    this.length = 0
}

Dorraymon.prototype.pop = function (element) {
    // Queremos obtener en primer lugar el
    // elemento a eliminar, que serà el último índice.
    // El último indice = lenght - 1
    this.length--;
    // Una vez ya hemos reducido el length, el length
    // actual será igual al último indice, 
    // En ese momento, hay que guardar en una variable el 
    // elemento que vamos a eliminar, ya que luego hay 
    // que acceder a él y sino no podremos
    var LastElement = this[this.length];
    // 
    delete this[this.length];
    return LastElement;
}






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
