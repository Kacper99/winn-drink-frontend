import React from 'react'
import {Link} from "react-router-dom";

class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: this.getQuestions(),
            question: {type: "", text: ""},
            endgame: false
        }
    }

    async getQuestions() {
        //192.168.1.156
        const response = await fetch("http://192.168.1.156:5000/cards", {mode: "cors", method: "GET"});
        const myJson = await response.json();
        const question = myJson.pop();
        console.log(myJson);
        console.log(question);
        this.setState({questions: myJson, question: question})
    }

    nextQuestion() {
        if (this.state.questions.length === 0) {
            this.setState({endgame: true});
        } else {
            const randomQuestion = this.state.questions.pop();
            console.log(randomQuestion);
            this.setState({question: randomQuestion})
        }
    }

    render() {
        let playerPool = this.props.players.slice(); //Clone the array
        const regex = /\$NAME/;
        const globalRegex = /\$NAME/g;
        let question = this.state.question.text;
        var count = (question.match(globalRegex) || []).length; //Get number of names in the card

        for (let i = 0; i < count; i++) {
            const randomIndex = Math.floor(Math.random() * playerPool.length); //Get a random index to choose a player from
            const randomPlayer = playerPool[randomIndex];
            playerPool.splice(randomIndex, 1);
            question = question.replace(regex, randomPlayer)
        }

        return (
            <div className="container">
                <div className="row">
                    <Link to="/">
                        <button type="button" className="btn btn-outline-light input-button">Add Players</button>
                    </Link>
                </div>
                <div className="row jumbotron vertical-center justify-content-center" onClick={() => this.nextQuestion()}>
                        {this.state.endgame ?
                            <span className="display-4">The end</span>
                            :
                            <span>
                                <span className="display-3">{this.state.question.type}</span>
                                <br/>
                                <span className="h1 game-text">{question}</span>
                            </span>
                        }
                    </div>
                </div>
        )
    }
}

export default Game