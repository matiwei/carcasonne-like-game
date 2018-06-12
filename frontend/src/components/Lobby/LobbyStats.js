import React, { PureComponent } from 'react';

import './LobbyStats.css';

class LobbyStats extends PureComponent {
    render() {
        return (
            <div className="lobby-stats">
                <div className="lobby-stats__header">
                    <h2 className="lobby-stats__header-title">
                        Statistics
                    </h2>
                </div>
                <div className="lobby-stats__stats">
                    <h3 className="lobby-stats__stats-entry">
                        Played games:
                        <span className="lobby-stats__stats-entry--value">
                            123
                        </span>
                    </h3>
                    <h3 className="lobby-stats__stats-entry">
                        Approx. turn points:
                        <span className="lobby-stats__stats-entry--value">
                            1
                        </span>
                    </h3>
                    <h3 className="lobby-stats__stats-entry">
                        Won:
                        <span className="lobby-stats__stats-entry--value">
                            2
                        </span>
                    </h3>
                </div>
            </div>
        );
    }
}

export default LobbyStats;
