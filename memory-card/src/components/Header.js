import React from "react";

export default function Header({score, bestScore}) {

    return(
        <div className="header">
            <div className="title">
                Memory Card Game
            </div>
            <div className="explanation">
                Click on the cards without clicking on the same card twice
            </div>
            <div className="scores">
                <p className="score">Score: {score}</p>
                <p className="best__score">Best Score: {bestScore}</p>
            </div>
        </div>
    )
}