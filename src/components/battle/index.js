import React from "react";
import {Link} from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

export default class Battle extends React.Component {
    constructor() {
        super();
        this.state = {
            playerOneName: "",
            playerTwoName: "",
            playerOneImage: null,
            playerTwoImage: null
        }
    }

    handleSubmit = (id, username) => {
        this.setState({
            [id + "Name"]: username,
            [id + "Image"]: 'https://github.com/' + username + '.png?size200'
        })
    }

    handleReset = (id) => {
        this.setState({
            [id + "Name"]: "",
            [id + "Image"]: null
        })
    }

    render() {
        return(
            <>
                <div className = "row" style={{marginTop: "55px"}}>
                    {!this.state.playerOneName ?
                        < PlayerInput
                        id = "playerOne"
                        label = "Player1"
                        onSubmit = {this.handleSubmit}
                        /> :
                        <PlayerPreview
                            avatar = {this.state.playerOneImage}
                            username = {this.state.playerOneName}
                        >
                            <button className = "reset-button" onClick = {() => this.handleReset('playerOne')}>Reset</button>
                        </PlayerPreview>
                    }
                    {!this.state.playerTwoName ?
                        < PlayerInput
                            id = "playerTwo"
                            label = "Player2"
                            onSubmit = {this.handleSubmit}
                        /> :
                        <PlayerPreview
                            avatar = {this.state.playerTwoImage}
                            username = {this.state.playerTwoName}
                        >
                            <button className = "reset-button" onClick = {() => this.handleReset('playerTwo')}>Reset</button>
                        </PlayerPreview>
                    }
                </div>
                {this.state.playerOneName && this.state.playerTwoName &&
                    <Link
                        className = "battle-button"
                        to = {{
                            pathname: "/battle/results",
                            search: `?playerOneName=${this.state.playerOneName}&playerTwoName=${this.state.playerTwoName}`
                        }}
                    >
                            Battle
                    </Link>
                }
            </>
        )
    }
}