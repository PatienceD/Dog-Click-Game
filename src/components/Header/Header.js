import React from "react";
import "./Header.css";

const Header = props => (
    <div className="jumbotron">
        <div className="header">
            <div className="title">{props.children}</div><br></br>
            <div className="scores">
                Score: {props.score} Highscore: {props.highscore}
            </div>
        </div>
    </div>
);

export default Header;