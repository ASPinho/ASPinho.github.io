import React from 'react';
import RetroConsole from "./components/retro-console";
import {getPlayersPerSymbol, getCardsPerSymbol, getZombieApocalypseCards} from "./scripts/kitten-tables";
import Table from "./components/simple-table";

function App() {

  const playersSymbolData = getPlayersPerSymbol();
  const cardsSymbolData = getCardsPerSymbol();
  const zombieApocalypseCards = getZombieApocalypseCards();

  return (
        <div id="main-content">
          <div id="header">
            <div>
              <p>
                Arkiteq Apps
              </p>
            </div>
            <div className="vertical-align">
              <p className="margin-right-xs">Continuous</p>
              <i className="fa-solid fa-gear fa-spin margin-right-2xs" aria-hidden="true"></i>
              <i className="fa-solid fa-gear fa-spin fa-spin-reverse fa-xs" aria-hidden="true"></i>
              <p className="margin-left-xs">WIP</p>
            </div>
          </div>
          <div id="content">
            <div className="content-title">
              <p>Setting up Kittens</p>
            </div>
            <div className="content-subtitle ph">
              <p>To play with your bitch ass friends</p>
            </div>
            <div className="content-container">
              <div className="horizontal-align justify-content-space-between margin-bottom-l">
                <RetroConsole>
                  <Table data={playersSymbolData}/>
                </RetroConsole>
                <RetroConsole>
                  <Table data={cardsSymbolData}/>
                </RetroConsole>
              </div>
              <div className="horizontal-align margin-bottom-l">
                <RetroConsole>
                  <Table data={zombieApocalypseCards}/>
                </RetroConsole>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
