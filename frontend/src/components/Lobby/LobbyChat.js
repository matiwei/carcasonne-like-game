import React, { Component } from 'react';

import './LobbyChat.css';

class LobbyChat extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''};
    }

    render() {
        this.props.messages.splice(0, 1);

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
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody className="lobby-games__games-body">
                    {
                        this.props.messages.map((message, i) => {
                            return <tr key={i}><td>{ message }</td></tr>;
                        })
                    }
                    </tbody>
                </table>
                <div className="lobby-chat__send">
                    <textarea className="lobby-chat__input" onChange={this.setMessage} />
                    <button className="lobby-chat__button" onClick={this.onSend}>Send</button>
                </div>
            </div>
        );
    }

    setMessage = (e) => this.setState({message: e.target.value});

    onSend = () => {
        this.props.handler.doSend({ type: 'sendMessage', arg1: this.state.message });
    }
}

export default LobbyChat;
