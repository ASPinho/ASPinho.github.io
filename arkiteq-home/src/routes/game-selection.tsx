import React from "react";
import DefaultLayout from "../components/layouts/default-layout";
import PageTitleBar from "../components/page-structure/page-title-bar";
import PageContent from "../components/page-structure/page-content";
import {useNavigate} from "react-router-dom";
import TheButton from "../components/the-button";
import { getGames} from "../scripts/games";

function GameSelection () {

    const games = getGames()
    const navigate = useNavigate()
    const gameButtons = []

    for (let i = 0; i < games.length; i++) {
        gameButtons.push(
            <TheButton id={i+1} label={games[i].title} onclick={() => navigate(games[i].route)}/>
        )
    }

    return (
        <>
            <DefaultLayout>
                <PageTitleBar title="Select a game" subtitle="To play with your bitch ass friends">
                </PageTitleBar>
                <PageContent>
                    {gameButtons}
                </PageContent>
            </DefaultLayout>
        </>
    )
}

export default GameSelection