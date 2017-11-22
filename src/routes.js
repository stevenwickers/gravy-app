import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/Home/HomePage';

import WelcomePage from './Components/Help/WelcomPage';
import Overview from './Components/Help/Overiview';
import ModelPage from './Components/Help/ModelPage';
import ControllerPage from './Components/Help/ControllerPage';

import MovieContainer from './Components/Movie/MovieContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="WelcomePage" component={WelcomePage} />
    <Route path="Overview" component={Overview} />
    <Route path="ModelHelp" component={ModelPage} />
    <Route path="ControllerHelp" component={ControllerPage} />
    <Route path="Movies" component={MovieContainer} />
  </Route>
);
