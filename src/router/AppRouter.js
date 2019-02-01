import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

// The following is a sample component; replace with your own component
const foo = <p>Hello world!</p>

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ foo } exact={ true } />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;