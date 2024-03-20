import React, {useEffect, useState} from "react";
import {convertAndPadTime} from "../scripts/utilities";
import moment from "moment";

export interface AnnouncementCard {
    title: string;
    description: string;
    dateTime: string;
}

type countdownTimer = {
    days: number;
    hours: string;
    minutes: string;
    seconds: string;
}

function AnnouncementCard (props: AnnouncementCard) {

    const targetDate = new Date(props.dateTime)

    const calcTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = {} as countdownTimer;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: convertAndPadTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
                minutes: convertAndPadTime(Math.floor((difference / 1000 / 60) % 60)),
                seconds: convertAndPadTime(Math.floor((difference / 1000) % 60)),
            };
        }

        return timeLeft;
    }

    const [currTimeLeft, setTimeLeft] = useState(calcTimeLeft())

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calcTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    let momentDate = moment(props.dateTime).format("MMM Do YYYY - ha");


    return (
        <div className={"vertical-align flex-column padding-xl"}>
            <div className={"announcement-card__title"}>
                {props.title}
            </div>
            <div className={"announcement-card__time"}>
                <span>
                    {currTimeLeft.days}:{currTimeLeft.hours}:{currTimeLeft.minutes}:{currTimeLeft.seconds}
                </span>
            </div>
            <div className={"announcement-card__moment"}>
                @ {momentDate}
            </div>
            <div className={"announcement-card__description"}>
                {props.description}
            </div>
        </div>
    )
}

export default AnnouncementCard