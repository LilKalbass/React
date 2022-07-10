import React from "react";
import Example from "./Example";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      country: "Ukraine"
    }
  }

  changeText = () =>{
    this.state.country === "Ukraine" ? this.setState({country:"Ukraine is the best"}) : this.setState({country:"Ukraine"});

  }

  render() {
    return (
        <>
          <Example data={this.state.country} />
          <input type="text" placeholder="s"/>
          <button onClick={this.changeText}>Поменять текст</button>
        </>
    )
  }
}

export default App;