import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path path='/wizard' component={Wizard}/>
    </Switch>
)