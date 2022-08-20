//  Tbh Functional is way more better, it feels like 10x better than switching from C++ to #.
//  U can focus on the idea, rather than wastin` tons of time on syntax which is useless, it even "calls" to u to react.
//  Nah it feels like I might enjoy studying for a while. And yeah.
//  For geeks Functional is 2ms faster than class shit for legacy code only.
import React from "react"
import Example from './Example'

        // Class component
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            country: "Ukraine"
        }
    }

    changeText = () => {
        this.state.country === "Ukraine"
            ? this.setState({country:"Ukraine is the best country"})
            : this.setState({country:"Ukraine"});
    }

    render() {
        return(
            <>
                <Example data={this.state.country} />
                <button onClick={this.changeText}>Change state </button>
            </>
        )
    }
}


//         //Functional component
// const App = () => {
//     App.state = {
//         country: "Ukraine"
//     }
//     changeText = () => {
//     this.setState({country: "Ukraine2"})
//     }
//     return (
//         <>
//             <Example data={App.state.country} />
//            <button onClick={changeText}>qwe</button>
//         </>
//     );
// };


 export default App;