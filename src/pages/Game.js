import React from 'react'

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
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

    componentWillMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div className="fullscreen" onClick={() => this.nextQuestion()}>
                <div className="centred">
                    {this.state.endgame ?
                        <span>The end</span>
                        :
                        <>
                            <span>{this.state.question.type}</span>
                            <br/>
                            <span className="game-text">{this.state.question.text}</span>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default Game