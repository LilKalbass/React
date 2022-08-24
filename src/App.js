import React from "react"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    postsArr: []
    }
  }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({postsArr: json}))
    }

    removePost(i) {
        this.state.postsArr.map(post => {
            if (post.id > i) {
                post.id--;
            }
            return post
        });
        this.state.postsArr.splice(i, 1);
        this.setState({postsArr: this.state.postsArr})
    }

    createPost() {

    }

  render() {
    console.log(this.state);
    return(
        <>
            <form onSubmit={this.createPost} className="buttons">
                <input type="text"/>
                <button type="submit" className = "buttonAdd">Add post</button>
                {/*<button className = "buttonDelete">Delete list</button>*/}
                {/*<button className = "buttonChange">Change post</button>*/}
            </form>
            <ul>
                {this.state.postsArr.map((post, i) =>
                    <li key={i}>
                        <p>{post.id}</p>
                        <h5 >{post.title}</h5>
                        <p>{post.body}</p>
                        <button className = "buttonRemove" onClick={() => this.removePost(i)}>Remove post</button>
                    </li>
                )}
            </ul>
        </>
    )
  }
}

export default App;