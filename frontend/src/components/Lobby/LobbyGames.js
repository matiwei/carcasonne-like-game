import React, { PureComponent } from 'react';

import './LobbyGames.css';

class LobbyGames extends PureComponent {
    render() {
        return (
            <div className="lobby-games">
                <div className="lobby-games__header">
                    <h2 className="lobby-games__header-title">
                        Games
                    </h2>
                    <button className="lobby-games__button">Create game</button>
                </div>
                <table className="lobby-games__games">
                    <thead className="lobby-games__games-header">
                    <tr>
                        <th width="20%">Name</th>
                        <th width="20%">Duration</th>
                        <th>Players</th>
                    </tr>
                    </thead>
                    <tbody className="lobby-games__games-body">
                    <tr>
                        <td>Game 1</td>
                        <td>1h 11m</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Game 2</td>
                        <td>2h 22m</td>
                        <td>2</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LobbyGames;
