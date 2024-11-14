

/*
Container: es el elemento DOM que representa la Clase, este contenedor se recibe como parámetro al crear una instancia de Component
*/
/*
children: es un array que almacenará los componentes hijos de este componente, permitiendo gestionar una estructura jerárquica (padre-hijo)
   ejemplo: se irá creando <div>,<p>, texto en un orden.
*/


class Component {
    constructor(container) {
        this.container = container
        this.children = []
    }


    /*
    método add, que permite crear un componente hijo al componente actual.
    Es como si fuera el container del container. 
    */
    /*
 - Añadimos el componente a la Array declarada previamente.
   Ha de haber un container previamente definido (pongamos un <main>)
   De tal forma que el método add: 
   * 1º Agrega el componente hijo (instancia de component) a la Array Children del padre
   * 2º Inserta el contenedor del componente hijo (component.container) como un hijo del contenedor del componente padre (this.container), visualizándolo dentro del contendero del padre en el DOM.
 */


    add(component) {
        this.children.push(component)
        this.container.appendChild(component.container)
    }


    /*
    método remove, que permite eliminar un componente hijo al componente actual.
  
    */

    /*
    
    1º Declaramos variable index que devolverá el indice del Array children en el que coincida la variable de la función flecha (que llamamos child), que coincida con el component.
 
    2º Comprobamos sin index es inferior a 0, ya que si FindIndex no encuentra valor, devolverá -1.
    - en caso de que sea true que findIndex no encuentre valor, resultará un error.
    - en caso de que sea false, llamamos al método splice (que elimina elmementos de una Array y los sustituye por otros => Eliminará únicamente (1), el índice en el que se encuentre el component
 
    ! 3º Elimina del container, el contenedor del componente hijo (component.container)
    ! Parece que esta parte esta fuera del else, por lo que según CHATGPT podría dar error
 
    */

    remove(component) {

        const index = this.children.findIndex(child => child === component)

        if (index < 0)
            throw new Error('child not found')

        else
            this.children.splice(index, 1)

        this.container.removeChild(component.container)
    }

    /*

    El método addBehavior permite crear un comportamiento como resupuesta a un evento (click, mouseover, etc.)

    addEventListener es el método que se aplicará sobre el container con los argumentos:
    - type: que será el vento
    - callback: la respuesta (función) al evento

    */

    addBehavior(type, callback) {
        this.container.addEventListener(type, callback)
    }

}