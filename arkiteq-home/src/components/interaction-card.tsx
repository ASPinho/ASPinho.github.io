import React, {useState} from "react";
import {InteractionCardProp} from "../scripts/interfaces";

const Interaction = (subtitle : string, description : string) => {
    return (
        <>
        <div className={"interaction-card-subtitle"}>
            {subtitle}
        </div>
        <div className={"interaction-card-description"}>
            {description}
        </div>
        </>
    )
}

const InteractionCard = (card: InteractionCardProp) => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen () {
        setIsOpen(!isOpen)
    }



    return (
        <div className={`interaction-card ${isOpen ? 'is-open' : ''}`}>
            <div className={"interaction-card-title"}
                 onClick={() => {toggleIsOpen()}}>
                {card.title}
                <div className={"interaction-card-icon"}/>
            </div>
            {isOpen &&
            <div className={"interaction-card-description"}>
                {card.description}
            </div>
            }
        </div>
    )
}

export default InteractionCard