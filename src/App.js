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

const View = styled.div`
  width: 100vw;
  height: auto;
`;

function App() {
  return (
    <BrowserRouter basename="/waldo">
      <>
        <Header />
        <View>
          <Switch>
            <Route exact path="/levels">
              <Levels />
            </Route>
            <Route exact path="/credits">
              <Credits />
            </Route>
            <Route exact path="/Leaderboard">
              <Leaderboard />
            </Route>
            <Route exact path="/level">
              <Level />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </View>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
