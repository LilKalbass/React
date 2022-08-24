import React from "react"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        postsArr: [],
        newPost: "",
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

    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value});
    }

    changePost(i) {
        const post = this.state.postsArr[i];
        post.body = this.state.newPost;

        this.setState({newPost: "",})
    }

  render() {
    console.log(this.state);
    return(
        <>
            {/*/!*<form onSubmit = {this.createPost} className = "buttons">*!/*/}
            {/*    <input type = "text"/>*/}
            {/*    <button type = "submit" className = "buttonAdd">Add post</button>*/}
            {/*    <button className = "buttonDelete" >Delete list</button>*/}
            {/*    <button className = "buttonChange">Change post</button>*/}
            {/*/!*</form>*!/*/}
            <ul className = "list">
                {this.state.postsArr.map((post, i) =>
                    <li className = "list-item" key={i}>{post.id}
                        <h4 >{post.title}</h4>
                        <p>{post.body}</p>
                        <input
                            className = "post"
                            name = "newPost"
                            type = "text"
                            value={this.state.newPost}
                            onChange={this.handleChange}
                        />
                        <div className = "buttons">
                            <button onClick = {() => this.changePost(i)}>Change post</button>
                            <button onClick = {() => this.removePost(i)}>Remove post</button>
                        </div>
                    </li>
                )}
            </ul>
        </>
    )
  }
}

export default App;