var homeView = document.createElement('main')

if (isUserLoggedIn())
    body.appendChild(homeView)

var homeTitle = document.createElement('h2')
homeTitle.innerText = 'Home'
homeView.appendChild(homeTitle)

var homeUser = document.createElement('h3')
homeUser.innerText = 'Hello, User'
homeView.appendChild(homeUser)

if (isUserLoggedIn()) {
    var name = getUserName()

    homeUser.innerText = 'Hello, ' + name + '!'
}

var homeLogoutButton = document.createElement('button')
homeLogoutButton.innerText = 'Logout'
homeView.appendChild(homeLogoutButton)

homeLogoutButton.onclick = function () {
    logoutUser()

    body.removeChild(homeView)
    body.appendChild(loginView)
}

var homeAddPostButton = document.createElement('button')
homeAddPostButton.innerText = '+'
homeView.appendChild(homeAddPostButton)
homeAddPostButton.onclick = function () {
    homeView.removeChild(homePosts)
    homeView.appendChild(homeCreatePosts)
}

var homePosts = document.createElement('section')
homeView.appendChild(homePosts)

if (isUserLoggedIn()) {
    var posts = getPosts()

    homePosts.innerHTML = ''

    posts.forEach(function (post) {
        var homePost = document.createElement('article')
        homePosts.appendChild(homePost)

        var postAuthor = document.createElement('h3')
        postAuthor.innerText = post.author
        homePosts.appendChild(postAuthor)

        var postImage = document.createElement('img')
        postImage.src = post.image
        homePosts.appendChild(postImage)

        var postText = document.createElement('p')
        postText.innerText = post.text
        homePosts.appendChild(postText)

        var postDate = document.createElement('time')
        postDate.innerText = post.date
        homePosts.appendChild(postDate)
    })
}

var homeCreatePosts = document.createElement('section')

var homeCreatePostTitle = document.createElement('h3')
homeCreatePostTitle.innerText = 'Create Post'
homeCreatePosts.appendChild(homeCreatePostTitle)

var homeCreatePostForm = document.createElement('form')
homeCreatePosts.appendChild(homeCreatePostForm)

var homeCreatePostImageLabel = document.createElement('label')
homeCreatePostImageLabel.innerText = 'Image'
homeCreatePostImageLabel.htmlFor = 'image'
homeCreatePostForm.appendChild(homeCreatePostImageLabel)

var homeCreatePostImageInput = document.createElement('input')
homeCreatePostImageInput.type = 'url'
homeCreatePostImageInput.id = 'image'
homeCreatePostForm.appendChild(homeCreatePostImageInput)

var homeCreatePostTextLabel = document.createElement('label')
homeCreatePostTextLabel.innerText = 'Text'
homeCreatePostTextLabel.htmlFor = 'text'
homeCreatePostForm.appendChild(homeCreatePostTextLabel)

var homeCreatePostTextInput = document.createElement('input')
homeCreatePostTextInput.type = 'text'
homeCreatePostTextInput.id = 'text'
homeCreatePostForm.appendChild(homeCreatePostTextInput)

var homeCreatPostSubmitButton = document.createElement('button')
homeCreatPostSubmitButton.innerText = 'Create'
homeCreatPostSubmitButton.type = 'submit'
homeCreatePostForm.appendChild(homeCreatPostSubmitButton)

homeCreatePostForm.onsubmit = function (event) {
    event.preventDefault()

    var image = homeCreatePostImageInput.value
    var text = homeCreatePostTextInput.value

    try {
        createPost(image, text)

        homeCreatePostForm.reset()

        homeView.removeChild(homeCreatePosts)
        homeView.appendChild(homePosts)

        var posts = getPosts()

        homePosts.innerHTML = ''

        posts.forEach(function (post) {
            var homePost = document.createElement('article')
            homePosts.appendChild(homePost)

            var postAuthor = document.createElement('h3')
            postAuthor.innerText = post.author
            homePost.appendChild(postAuthor)

            var postImage = document.createElement('img')
            postImage.src = post.image
            homemPost.appendChild(postImage)

            var postText = document.createElement('p')
            postText.innerText = post.text
            homemPost.appendChild(postText)

            var postDate = document.createElement('time')
            postDate.innerText = post.date
            homemPost.appendChild(postDate)
        })
    } catch (error) {
        alert(error.message)
        console.error(error)
    }
}

