var registerView = document.createElement('main')



var registerTitle = document.createElement('h2')
registerTitle.innerText = 'Register'
registerView.appendChild(registerTitle)

var registerForm = document.createElement('form')
registerView.appendChild(registerForm)



var registerFormNameLabel = document.createElement('label')
registerFormNameLabel.innerText = 'Name: '
registerFormNameLabel.htmlFor = 'name'
registerForm.appendChild(registerFormNameLabel)

var registerFormNameInput = document.createElement('input')
registerFormNameInput.type = 'text'
registerFormNameInput.placeholder = 'Here your name'
registerFormNameInput.id = 'name'
registerForm.appendChild(registerFormNameInput)


var registerFormBreakFirst = document.createElement('br')
registerForm.appendChild(registerFormBreakFirst)


var registerFormEmailLabel = document.createElement('label')
registerFormEmailLabel.innerText = 'E-mail: '
registerFormEmailLabel.htmlFor = 'email'
registerForm.appendChild(registerFormEmailLabel)

var registerFormEmailInput = document.createElement('input')
registerFormEmailInput.type = 'email'
registerFormEmailInput.placeholder = 'Here your e-mail'
registerFormEmailInput.id = 'email'
registerForm.appendChild(registerFormEmailInput)

var registerFormBreakFirst = document.createElement('br')
registerForm.appendChild(registerFormBreakFirst)

var registerFormUsernameLabel = document.createElement('label')
registerFormUsernameLabel.innerText = 'Username: '
registerFormUsernameLabel.htmlFor = 'username'
registerForm.appendChild(registerFormUsernameLabel)

var registerFormUsernameInput = document.createElement('input')
registerFormUsernameInput.type = 'text'
registerFormUsernameInput.placeholder = 'Here your username'
registerFormUsernameInput.id = 'username'
registerForm.appendChild(registerFormUsernameInput)

var registerFormBreakFirst = document.createElement('br')
registerForm.appendChild(registerFormBreakFirst)

var registerFormPasswordLabel = document.createElement('label')
registerFormPasswordLabel.innerText = 'Password: '
registerFormPasswordLabel.htmlFor = 'password'
registerForm.appendChild(registerFormPasswordLabel)

var registerFormPasswordInput = document.createElement('input')
registerFormPasswordInput.type = 'password'
registerFormPasswordInput.placeholder = '> 8 caráct.'
registerFormPasswordInput.id = 'password'
registerForm.appendChild(registerFormPasswordInput)

var registerFormBreakFirst = document.createElement('br')
registerForm.appendChild(registerFormBreakFirst)

var registerFormSubmitButton = document.createElement('button')
registerFormSubmitButton.type = 'submit'
registerFormSubmitButton.innerText = 'register'
registerForm.appendChild(registerFormSubmitButton)

registerForm.onsubmit = function (event) {
    event.preventDefault()

    var name = registerFormUsernameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    try {
        registerUser(name, email, username, password)

        registerForm.reset()

        body.removeChild(registerView)
        body.appendChild(loginView)

    } catch (error) {

        alert(error.message)

        console.error(error)

    }

}

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
registerLoginLink.innerText = 'Login'
registerView.appendChild(registerLoginLink)

registerLoginLink.onclick = function (event) {
    event.preventDefault()

    body.removeChild(registerView)
    body.appendChild(loginView)
}


