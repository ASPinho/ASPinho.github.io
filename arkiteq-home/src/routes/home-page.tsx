import React from 'react';
import DefaultLayout from "../components/layouts/default-layout";
import PageTitleBar from "../components/page-structure/page-title-bar";
import {getHomePageMenus} from "../scripts/menus";
import {useNavigate} from "react-router-dom";
import PageContent from "../components/page-structure/page-content";
import GameCard from "../components/game-card";

export default HomePage;

function HomePage() {

    const menus = getHomePageMenus();
    const navigate = useNavigate();

    return (
      <>
          <DefaultLayout pageTitle={"Root"}>
              <PageTitleBar title="HomePage"/>
              <PageContent>
                  <div className={"display-flex flex-row-wrap row-gap-m column-gap-m"}>
                      {menus.map((menu, index) => (
                          <GameCard key={index+1} label={menu.title} onclick={() => navigate(menu.route)}/>
                          ))}
                  </div>
              </PageContent>
          </DefaultLayout>
      </>
);
}