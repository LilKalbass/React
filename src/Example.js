import React from "react";

class Example extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <h1>{this.props.data}</h1>
        )
    }
}

export default Example;