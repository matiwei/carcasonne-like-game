import React, { PureComponent } from 'react';

import './LobbyChat.css';

class LobbyChat extends PureComponent {
    render() {
        return (
            <div className="lobby-chat">
                <div className="lobby-chat__header">
                    <h3 className="lobby-chat__header-title">
                        Chat
                    </h3>
                </div>
                <table className="lobby-chat__messages">
                    <thead className="lobby-chat__meassages-header">
                    <tr>
                        <th>Time</th>
                        <th>Player</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody className="lobby-games__games-body">
                    <tr>
                        <td>1:11</td>
                        <td>Player 1</td>
                        <td>Message 1</td>
                    </tr>
                    <tr>
                        <td>2:22</td>
                        <td>Player 2</td>
                        <td>Message 2</td>
                    </tr>
                    </tbody>
                </table>
                <div className="lobby-chat__send">
                    <textarea className="lobby-chat__input" />
                    <button className="lobby-chat__button">Send</button>
                </div>
            </div>
        );
    }
}

export default LobbyChat;
