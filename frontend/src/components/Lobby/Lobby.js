import React, { PureComponent } from 'react';

import LobbyGames from './LobbyGames';
import LobbyStats from './LobbyStats';
import LobbyChat from './LobbyChat';

import './Lobby.css';
import sword from '../../assets/sword.png';

class Lobby extends PureComponent {
    render() {
        const { handler, messages } = this.props;

        return (
            <div className="lobby">
                <div className="lobby__header">
                    <div className="lobby__logo">
                        <img src={sword} className="lobby__logo-img" alt="sword" />
                        <h1 className="lobby__logo-name">
                            Medieval Game
                        </h1>
                    </div>
                    <div className="lobby__user">
                        <h2 className="lobby__username">
                            Username
                        </h2>
                        <button className="lobby__button--logout">
                            Logout
                        </button>
                    </div>
                </div>
                <div className="lobby__horizontal-wrapper">
                    <div className="lobby__vertical-wrapper">
                        <LobbyGames />
                        <LobbyStats messages={messages} />
                    </div>
                    <LobbyChat handler={handler} messages={messages} />
                </div>
            </div>
        );
    }
}

export default Lobby;
