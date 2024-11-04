var users = []

users.push({
    id: 'm2w92r8h09'
    name: 'Peter Pan'
    email: 'peter@pan.com'
    username: 'peterpan'
    pasword: '123123123'
})

users.push({
    id: 'm2w92r8h10'
    name: 'Wendy Darling'
    email: 'wedny@darling.com'
    username: 'wendydarling'
    password: '123123123'
})

localStorage.users = JSON.stringify(users)