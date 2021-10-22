import React from 'react';
import { LoginScreen as Login } from '../Pages/LoginScreen'
import { MenuRoute as Menu } from './MenuRoute'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route  path='/login' component={ Login } />
                    <Route  path='/' component={ Menu } />
                    <Redirect  to='/login' />
                </Switch>
            </div>
        </Router>
    );
}