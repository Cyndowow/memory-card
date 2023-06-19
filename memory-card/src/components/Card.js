import React from "react";

export default function Card({villager, onCardClick}) {



    return(
        <div className="Card" onClick={onCardClick}>
            <img src={villager.image} alt={villager.name} ></img>
            <h3>{villager.name}</h3>
        </div>
    )
}