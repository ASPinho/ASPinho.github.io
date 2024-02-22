import React from 'react';
import RetroConsole from "./components/retro-console";

function App() {
  return (
        <div id="main-content">
          <div id="header">
            <div>
              <p>
                ArkiApps
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
              <div className="horizontal-align margin-bottom-l">
                <RetroConsole>
                  <table id="player-symbol">
                    <thead>
                    <tr>
                      <th className="vertical-align flex1"><p>Max Players / Symbol</p></th>
                      <th className="small full-center-flex"><p>Paw</p></th>
                      <th className="med full-center-flex"><p>No Paw</p></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="vertical-align flex1"><p>Zombie</p></td>
                      <td className="small full-center-flex"><p>2</p></td>
                      <td className="med full-center-flex"><p>3</p></td>
                    </tr>
                    <tr>
                      <td className="vertical-align flex1"><p>Exploding</p></td>
                      <td className="small full-center-flex"><p>3</p></td>
                      <td className="med full-center-flex"><p>7</p></td>
                    </tr>
                    </tbody>
                  </table>
                </RetroConsole>
                <div className="retro-console">
                  <table id="player-symbol">
                    <thead>
                    <tr>
                      <th className="vertical-align flex1"><p>Max Players / Symbol</p></th>
                      <th className="small full-center-flex"><p>Paw</p></th>
                      <th className="med full-center-flex"><p>No Paw</p></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td className="vertical-align flex1"><p>Zombie</p></td>
                      <td className="small full-center-flex"><p>2</p></td>
                      <td className="med full-center-flex"><p>3</p></td>
                    </tr>
                    <tr>
                      <td className="vertical-align flex1"><p>Exploding</p></td>
                      <td className="small full-center-flex"><p>3</p></td>
                      <td className="med full-center-flex"><p>7</p></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div className="retro-console margin-left-l">
                  <table id="card-symbol">
                    <thead>
                      <tr>
                        <th className="vertical-align flex1"><p>Cards / Symbol</p></th>
                        <th className="small full-center-flex"><p>Paw</p></th>
                        <th className="med full-center-flex"><p>No Paw</p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="vertical-align flex1"><p>Exploding</p></td>
                        <td className="small full-center-flex"><p>24</p></td>
                        <td className="med full-center-flex"><p>36</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>Zombie</p></td>
                        <td className="small full-center-flex"><p>22</p></td>
                        <td className="med full-center-flex"><p>30</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="horizontal-align margin-bottom-l">
                <div className="retro-console">
                  <table id="zombie-apocalypse">
                    <thead>
                      <tr>
                        <th className="vertical-align flex1"><p>Zombie Apocalypse Players</p></th>
                        <th className="small full-center-flex"><p>Draw Pile</p></th>
                        <th className="med full-center-flex"><p>Cards to add</p></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="vertical-align flex1"><p>2</p></td>
                        <td className="small full-center-flex"><p>15</p></td>
                        <td className="med full-center-flex"><p>7</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>3</p></td>
                        <td className="small full-center-flex"><p>20</p></td>
                        <td className="med full-center-flex"><p>11</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>4</p></td>
                        <td className="small full-center-flex"><p>25</p></td>
                        <td className="med full-center-flex"><p>1</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>5</p></td>
                        <td className="small full-center-flex"><p>30</p></td>
                        <td className="med full-center-flex"><p>13</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>6</p></td>
                        <td className="small full-center-flex"><p>35</p></td>
                        <td className="med full-center-flex"><p>25</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>7</p></td>
                        <td className="small full-center-flex"><p>"</p></td>
                        <td className="med full-center-flex"><p>32</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>8</p></td>
                        <td className="small full-center-flex"><p>"</p></td>
                        <td className="med full-center-flex"><p>39</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>9</p></td>
                        <td className="small full-center-flex"><p>"</p></td>
                        <td className="med full-center-flex"><p>46</p></td>
                      </tr>
                      <tr>
                        <td className="vertical-align flex1"><p>10</p></td>
                        <td className="small full-center-flex"><p>"</p></td>
                        <td className="med full-center-flex"><p>53</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default App;
