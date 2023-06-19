import React from "react";

export default function Card({villager, onCardClick}) {



    return(
        <div className="card" onClick={onCardClick}>
            <img src={villager.image} alt={villager.name} ></img>
            <p className="name">{villager.name}</p>
        </div>
    )
}