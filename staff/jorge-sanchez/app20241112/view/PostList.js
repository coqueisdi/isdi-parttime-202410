class Postlist extends Component {
    constructor() {
        super(document.createElement('section'))
    }

    /*
    setPosts -> método para "pintar" los posts
    Con cada Post tenemos que crear un componente
  
    */

    setPosts(posts) {
        posts.forEach(post => {
            const postItem = new PostItem(post)

            this.add(postItem)
        })



    }


}