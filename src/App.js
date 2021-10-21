import React, { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/'>
              <Header />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
