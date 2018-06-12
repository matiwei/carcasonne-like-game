import React, { PureComponent } from 'react';

import LobbyGames from './LobbyGames';
import LobbyStats from './LobbyStats';
import LobbyChat from './LobbyChat';

import './Lobby.css';
import sword from '../../assets/sword.png';

class Lobby extends PureComponent {
    render() {
        return (
            <div className="lobby">
                <div className="lobby__header">
                    <img src={sword} className="lobby__logo" alt="sword" />
                    <h1 className="lobby__name">
                        Medieval Game
                    </h1>
                </div>
                <div className="lobby__horizontal-wrapper">
                    <div className="lobby__vertical-wrapper">
                        <LobbyGames />
                        <LobbyStats />
                    </div>
                    <LobbyChat />
                </div>
            </div>
        );
    }
}

export default Lobby;
