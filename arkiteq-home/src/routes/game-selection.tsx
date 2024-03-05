import React from "react";
import DefaultLayout from "../components/layouts/default-layout";
import PageTitleBar from "../components/page-structure/page-title-bar";
import PageContent from "../components/page-structure/page-content";
import {useNavigate} from "react-router-dom";
import GameCard from "../components/game-card";
import { getGames} from "../scripts/games";

function GameSelection () {

    const games = getGames()
    const navigate = useNavigate()

    return (
        <>
            <DefaultLayout>
                <PageTitleBar title="Select a game" subtitle="To play with your bitch ass friends">
                </PageTitleBar>
                <PageContent>
                    <div id={"game-selection"}>
                        {games.map((game,index) => (
                            <GameCard key={index+1} label={game.title} onclick={() => navigate(game.route)}/>
                        ))}
                    </div>
                </PageContent>
            </DefaultLayout>
        </>
    )
}

export default GameSelection