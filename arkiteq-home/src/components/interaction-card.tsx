import React, {useState} from "react";
import {InteractionCardProp} from "../scripts/interfaces";

const InteractionCard = (card: InteractionCardProp) => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen () {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`interaction-card ${isOpen ? 'is-open' : ''}`}>
            <div className={"interaction-card-title"}>
                {card.title}
                <div
                    className={"interaction-card-icon"}
                    onClick={() => {toggleIsOpen()}}
                />
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