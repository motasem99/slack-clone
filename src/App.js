import React, { Fragment } from 'react';
import './App.css';

import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className='app'>
      <Router>
        <Fragment>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path='/'>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
