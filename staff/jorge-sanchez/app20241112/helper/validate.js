var validate = (function () {
    function validateUsername(username) {
        if (typeof username !== 'string') throw new Error('invalid username type')
        if (username.length < 4) throw new Error('invalid username length')
    }

    function validatePassword(password) {
        if (typeof password !== 'string') throw new Error('invalid password type')
        if (password.length < 8) throw new Error('invalid password length')
    }

    function validateName(name) {
        if (typeof name !== 'string') throw new Error('invalid name type')
        if (name.length < 1) throw new Error('invalid name length')
    }

    function validateEmail(email) {
        if (typeof email !== 'string') throw new Error('invalid email type')
        if (email.length < 6) throw new Error('invalid email length')
    }

    return {
        username: validateUsername,
        password: validatePassword,
        name: validateName,
        email: validateEmail
    }
})()


/* Es una función IIFFE! (Immediately Invoked Function Expression)

La función IIFFE es una función que se define y se ejecuta inmediatamente despúes de su declaración

Su propósito principal es el de crear un ámbito de ejecución propio, para evitar que se interfiera con otras variables (aislamiento de código)

SINTAXIS ->     (funcion)()
SINTAXIS En nuestro caso:
-> se declara una función que contiene hasta 4 funciones de validación
-> luego crea un objeto con métodos para acceder a las funciones creadas (para crear por ejemplo, "validate.username")


*/