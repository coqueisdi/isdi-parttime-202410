var landingView = document.createElement('main')
// Crear un elemento <main></main> al document, al que accederemos llamando a landingView

if (!isUserLoggedIn())
    body.appendChild(landingView)

// Crea una línea de código (crea el <main></main> en el body) que se ejecutará si se cumple la condición if. 
// Si la condición es false; es decir, que no hay un usuario (ID) creado en la sessionStorage 
// La condición será si la función isUserLoggedIn es false. 
// - Entonces en ese caso el elemento main creado en LandingView, se anida en el body.

var landingTitle = document.createElement('h2')
// Independientemente de la condición if se cumpla o no, creamos esta variable:
// por la cual se crea un elmento <h2></h2> en el document y que es la que
// se acabará imprimiendo en en el caso de que se cumpla la condición (que el usuario no esté registrado)                                             

landingView.appendChild(landingTitle)
// Mete el elemento <h2></h2> en <main></main>
// solo se reproducirá si antes se ha creado landingView

landingTitle.innerText = 'Welcome!'
// En el elemento <h2></h2> introducimos el texto "Welcome"


var landingIntro = document.createElement('p')
landingView.appendChild(landingIntro)
// en <main>, ponemos el <p> donde pondremos el link a register

var landingRegisterLink = document.createElement('a')
landingRegisterLink.href = ''
landingRegisterLink.innerText = 'Register'
landingIntro.appendChild(landingRegisterLink)

landingRegisterLink.onclick = function (event) {
    event.preventDefault()
    // event.preventDefault() sirve para que no se recargue la página

    body.removeChild(landingView)
    body.appendChild(registerView)
    // se quita lo que hemos incluido con landingView 
    // e introducimos los elementos de registro
}

var landingIntroOrText = new Text(' or ')
landingIntro.appendChild(landingIntroOrText)

var landingLoginLink = document.createElement('a')
landingLoginLink.href = ''
landingLoginLink.innerText = 'Login'
landingIntro.appendChild(landingLoginLink)

landingLoginLink.onclick = function (event) {
    event.preventDefault()

    body.removeChild(landingView)
    body.appendChild(loginView)
}



