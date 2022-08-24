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
        const newArr = this.state.postsArr.map(item => {
            const obj = item;
            if (item.id > i) {
                obj.id--;
            }
            return obj
        });
        newArr.splice(i, 1);
        this.setState({ postsArr: newArr })
    }

  render() {
    console.log(this.state);
    return(
        <div className="container">
            <div className="buttons">
                {/*<button className = "buttonAdd">Add post</button>*/}
                {/*<button className = "buttonDelete">Delete list</button>*/}
                {/*<button className = "buttonChange">Change post</button>*/}
            </div>
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
        </div>
    )
  }
}

export default App;