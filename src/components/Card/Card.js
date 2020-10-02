import React from "react";
import "./Card.css";

const Card = props => (
    <div>
        <div className="outside">
            <div className="card" onClick={() => props.clickCount(props.id)}>
                <div className="img-container">
                    <img alt={props.name} src={props.image} />
                </div>
            </div>
        </div>
        <br></br>
    </div>

);

export default Card; 