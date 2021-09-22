import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// MY COMPONENTS
// HOME
import Header from '../Header';
import HomeIntro from '../HomeIntro';
import WhoAreWe from '../WhoAreWe';
import LogoCarousel from '../LogoCarousel';
import Methods from '../Methods';
import Ranking from '../Ranking';
import Footer from '../Footer';

// SIGN IN
import SignIn from '../SignIn';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Header />
          <HomeIntro />
          <WhoAreWe />
          <LogoCarousel />
          <Methods />
          <Ranking />
          <Footer />
        </Route>
        <Route path="/rf-admin">
          <SignIn />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
