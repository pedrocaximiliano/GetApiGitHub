import React from 'react';
import * as constants from './util/constants';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../src/pages/main';
import Commits from './pages/commits';

const Routes = () =>  (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path={constants.Commits('value')} component={Commits}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;