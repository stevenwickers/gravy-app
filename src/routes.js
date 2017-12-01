import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/Home/HomePage';
import Overview from './Components/Help/Overiview';
import MovieContainer from './Components/Movie/MovieContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="Overview" component={Overview} />
    <Route path="Movies" component={MovieContainer} />
  </Route>
);
