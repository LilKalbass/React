import React from "react";
import {Link} from "react-router-dom";

class Result extends React.Component {
    constructor() {
        super();
        this.state = {
            winner: null,
            loser:null,
            error: null,
            loading: false
        }
    }

    componentDidMount() {
        //  Сюда он не доходит из Battl`a

        console.log(this.props)

        // const searchParams = new URLSearchParams(this.props.location.search);
        // console.log(searchParams.get("playerOneName"));
        // console.log(searchParams.get("playerTwoName"));
    }

    render() {
        if(this.state.loading) {
            return <p>Loading...</p>
        }

        if(this.state.error) {
            return <>
                <p>{this.state.error}</p>
                <Link className = "battle-button" to = '/battle' >Reset</Link>
            </>
        }

        return(
            <h1>Results</h1>
        )
    }
}

export default Result;