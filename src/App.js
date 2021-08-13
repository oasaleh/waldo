import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Levels from './pages/Levels';
import Level from './pages/Level';
import Credits from './pages/Credits';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
/* ---------------------------------- style --------------------------------- */
const APP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const View = styled.div`
  flex-grow: 4;
  width: 100vw;
  padding-top: 10px;
  padding-bottom: 100px;
`;
/* -------------------------------- component ------------------------------- */
function App() {
  return (
    <BrowserRouter>
      <APP>
        <Header style={{ width: '100%' }} />
        <View>
          <Switch>
            <Route exact path="/credits">
              <Credits />
            </Route>
            <Route exact path="/Leaderboard">
              <Leaderboard />
            </Route>
            <Route exact path="/level">
              <Level />
            </Route>
            <Route path="/levels">
              <Levels />
            </Route>
            <Route path="/">
              <Levels />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </View>
        <Footer />
      </APP>
    </BrowserRouter>
  );
}

export default App;
