import React, { Component, Fragment } from 'react';
import HomePage from '../pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </Fragment>
        ); // Add closing tag for Fragment component
    }
}

export default AppRoute;
