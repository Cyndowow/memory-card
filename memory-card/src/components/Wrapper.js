import React from "react";
import Card from "./Card";

export default function Wrapper({villagers, onCardClick}) {

    const villagerCards = villagers.map((villager) => (
        <Card key={villager.id} villager={villager} onCardClick={onCardClick}/>
    ))

    return(
        <div className="wrapper">
            {villagerCards}
        </div>
    )
}