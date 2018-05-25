import React from 'react';
import ReactDOM from 'react-dom';
import X from "./components/playerx";
import O from "./components/playero";
import Game from "./components/game";


ReactDOM.render(<X />,
        document.getElementById('playerx')
    )

ReactDOM.render(<O />,
        document.getElementById('playero')
    )

ReactDOM.render(<Game />,
        document.getElementById('container')
    )