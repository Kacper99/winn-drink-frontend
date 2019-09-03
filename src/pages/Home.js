import React from 'react'
import '../styles/inputs.css'

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            players: props.players
        }
    }

    submitForm(event) {
        event.preventDefault();
        let players = [];
        for (let i = 0; i < event.target.length; i++) {
            if (event.target[i].value !== "") {
                players.push(event.target[i].value);
            }
        }
        this.props.setPlayers(players);
        console.log(players)
        this.props.history.push("/game")
    }

    render() {
        let playerCount = 24;
        let inputs = [];
        for (let i = 0; i < playerCount; i++) {
            let value = this.props.players[i] !== null ? this.props.players[i] : "";
            inputs.push(
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Name"
                           aria-label="Username" key={"player-" + i} defaultValue={value}
                           aria-describedby="basic-addon1"/>
                    {/*<div className="input-group-append">*/}
                    {/*    <button className="btn btn-outline-light" type="button">X</button>*/}
                    {/*</div>*/}
                </div>
            )
        }
        return (
            <div className="container h-100">
                <div className="row jumbotron vertical-center justify-content-center">
                    <form className="col-12" onSubmit={(event) => this.submitForm(event)}>
                        {inputs}
                        <button type="submit" className="btn btn-outline-light input-button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home