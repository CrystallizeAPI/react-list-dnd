import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// The following is a sample component; replace with your own component
const Foo = () => (
    <p>Sample Text</p>
);

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ Foo }  exact={ true } />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;