import React from "react";

class Example extends React.Component{
    constructor(){
        super()

    }
    render(){
        console.log(this.props.data);
        return(
            <h1>{this.props.data}</h1>
        )
    }
}

// const Example = (props) => {
//     console.log(props);
//     return (
//         <div>{props.data}</div>
//     )
// }


export default Example;