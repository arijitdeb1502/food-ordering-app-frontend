import React from 'react';

import { 
            BrowserRouter, 
            Route, 
            Switch
            // Link, 
            // NavLink 
        } from 'react-router-dom';

import Aux from '../hoc/Aux';
import Header from '../containers/Header/Header';
import HomePage from '../containers/screens/HomePage/HomePage';
import ProfilePage from '../containers/screens/ProfilePage/ProfilePage';

const AppRouter=()=>(
    <BrowserRouter>
        <Aux>
            <Header/>
            <Switch>
                <Route path="/profile" component={ProfilePage} exact={true} />
                <Route path="/" component={HomePage} exact={true} />
            </Switch>
        </Aux>
    </BrowserRouter>
)

export default AppRouter;
