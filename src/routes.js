import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/Home/HomePage';
import Overview from './Components/Help/Lib/Pages/Overview';
import MovieContainer from './Components/Movie/MovieContainer';
import HocContainer from './Components/TestPages/HocContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="Overview" component={Overview} />
    <Route path="Movies" component={MovieContainer} />
    <Route path="HOC" component={HocContainer} />
  </Route>
);
