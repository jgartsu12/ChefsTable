import React from 'react';
import { Route, Redirect } from 'react-router-dom';

<Router>
    <div>
        <Switch>
                <Route 
                path='/phlog-manager'
                render={props => <PhlogManager {...props}/>} />
        </Switch>
    </div>
</Router>

const AuthRoute = ({ component: Component, ...loggedInStatus }) => (
    <Route {...loggedInStatus} render={(props) => (
        loggedInStatus.isAuthenticated === true 
        ? <Component {...props} />
        : <Redirect to= {{
            pathname: '/phlog-manager',
            state: { from: props.location }
        }} />
    )} />
);