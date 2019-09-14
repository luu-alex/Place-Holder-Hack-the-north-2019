import React from 'react';
import ReactDOM from 'react-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';

class App extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                </Jumbotron>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
