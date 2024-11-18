const root = ReactDOM.createRoot(document.querySelector('#root'))

const jsx = React.createElement

const title = React.createElement('h1', {
    children: ['Hangman'],
    style: {
        backgroundColor: 'tomato',
        color: 'red'
    }

})

const charForm = jsx('form', {
    children: [
        jsx('label', { children: ['Chart'], htmlFor: 'char' }),
        jsx('input', { id: 'char' }),
        jsx('button', { children: ['Try'], type: 'submit' })
    ],
    onSubmit: event => {
        event.preventDefault()

        const form = event.target
        const input = form.char

        const char = input.value

        console.log(char)

    }

})

root.render([title, charForm])

