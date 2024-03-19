import React, {useEffect, useState} from "react";

export interface AnnouncementCard {
    title: string;
    description: string;
    dateTime: string;
}

type countdownTimer = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function AnnouncementCard (props: AnnouncementCard) {

    const targetDate = new Date(props.dateTime)

    const calcTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = {} as countdownTimer;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
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

    return (
        <div className={"full-center-flex flex-column-wrap"}>
            <div className={"font-size-heading1"}>
                {props.title}
            </div>
            <div className={"font-size-l"}>
                {props.description}
            </div>
            <div className={"announcement-card-time"}>
                <span>
                    {currTimeLeft.days}:{currTimeLeft.hours}:{currTimeLeft.minutes}:{currTimeLeft.seconds}
                </span>
            </div>
        </div>
    )
}

export default AnnouncementCard