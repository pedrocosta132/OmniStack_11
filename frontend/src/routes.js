import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incident/new" component={NewIncident} />
            </Switch>
        </Router>
    )
}

export default Routes;