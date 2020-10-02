import React from "react";
import "./Header.css";

const Header = props => (
    <div>
        <div className="row">
            <div className="jumbotron">
                <h1 className="display-4">Hey There! Welcome to the Dog {props.children}</h1>
                <hr className="my-4"></hr>
                <p>This is a memory clicking game built entirely with React. It will keep track of your score each time you correctly click on an image you haven't clicked
                before. Your score will increase with each correct click, and the score will completely reset with an incorrect click. Each time an image is clicked,
                    the images rendered will shuffle themselves in a random order. Best of luck!</p>
                <br></br>
                <div className="header">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <div className="scores">
                                Score: {props.score} Highscore: {props.highscore}
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;