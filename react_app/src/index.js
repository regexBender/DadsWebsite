import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import Curator from './Curator';
import * as serviceWorker from './serviceWorker';


class Main extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/gallery" component={App}></Route>
                <Route exact path="/curator-mode" component={Curator}></Route>
            </Router>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
