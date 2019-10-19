import React, {useState} from 'react';
import './styles/App.css';
import './styles/divs.css'
import './styles/text.css'
import Game from "./pages/Game";
import Home from "./pages/Home";
import Settings from "./pages/Settings"
import {Route, BrowserRouter as Router} from "react-router-dom";

export default function () {
    const [players, setPlayers] = useState([]);
    const [server, setServer] = useState("http://localhost:5000");

    return (
        <Router>
            <Route path="/" exact render={props => <Home {...props} players={players} setPlayers={setPlayers}/>}/>
            <Route path="/game" exact render={props => <Game {...props} players={players} server={server}/>}/>
            <Route path="/settings" exact render={props => <Settings {...props} setServer={setServer} />}/>>
        </Router>
    );
}
