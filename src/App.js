import React from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom'
import Landing from './components/Landing';
import Profile from './components/Profile';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {/* <Route exact path="/" component={Landing} /> */}
          <Route exact path="/" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
