import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Profile from './components/Profile';

//package imports
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom'

const history = createBrowserHistory();           //create browser history is used to manage the browser page navigation on clicking the previous and next buttons on the browser

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
