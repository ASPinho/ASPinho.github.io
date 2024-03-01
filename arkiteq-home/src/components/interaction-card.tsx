import React, {useState} from "react";
import {InteractionCardProp, InteractionCardSubsection} from "../scripts/interfaces";

const Interaction = (subsection : InteractionCardSubsection) => {
    return (
        <div className={"interaction-card-subsection"}>
            <div className={"interaction-card-subtitle"}>
                {subsection.subtitle}
            </div>
            <div className={"interaction-card-description"}>
                {subsection.description}
            </div>
        </div>
    )
}

const InteractionCard = (card: InteractionCardProp) => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen () {
        setIsOpen(!isOpen)
    }

    let subsections = [];

    for (let i = 0; i < card.subsections.length; i++) {
        subsections.push(
            <Interaction key={i+1} subtitle={card.subsections[i].subtitle} description={card.subsections[i].description}/>
        )
    }

    return (
        <div className={`interaction-card ${isOpen ? 'is-open' : ''}`}>
            <div className={"interaction-card-title"}
                 onClick={() => {toggleIsOpen()}}>
                {card.title}
                <div className={"interaction-card-icon"}/>
            </div>
            {isOpen && subsections}
        </div>
    )
}

export default InteractionCard