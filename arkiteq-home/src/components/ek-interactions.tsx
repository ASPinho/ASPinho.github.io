import React from "react";
import {getKittensInteractions} from "../scripts/kittens";
import {InteractionCardProp} from "../scripts/interfaces";
import InteractionCard from "./interaction-card";
import RetroConsole from "./retro-console";

const EkInteractions = () => {

    const interactions : InteractionCardProp[] = getKittensInteractions();
    const cards  = [];

    for (let i = 0; i < interactions.length; i++) {
        cards.push(
            <RetroConsole key={i+1}>
                <InteractionCard title={interactions[i].title} subsections={interactions[i].subsections }/>
            </RetroConsole>
        )
    }

    return (
        <>
            {cards}
        </>
    )
}

export default EkInteractions