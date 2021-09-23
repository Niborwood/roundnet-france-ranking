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
import SignInWrapper from '../SignInWrapper';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import ForgottenPassword from '../ForgottenPassword';

function App() {
  return (
    <div className="app">
      <Switch>

        {/* HOME */}
        <Route exact path="/">
          <Header />
          <HomeIntro />
          <WhoAreWe />
          <LogoCarousel />
          <Methods />
          <Ranking />
          <Footer />
        </Route>

        {/* LOG IN */}
        <Route path="/rf-admin">
          <SignInWrapper title="Se Connecter">
            <LogIn />
          </SignInWrapper>
        </Route>

        {/* SIGN UP */}
        <Route path="/rf-signup">
          <SignInWrapper title="Créer un compte">
            <SignUp />
          </SignInWrapper>
        </Route>

        {/* PASSWORD FORGOTTEN */}
        <Route path="/rf-pwd-forgotten">
          <SignInWrapper title="Mot de passe oublié">
            <ForgottenPassword />
          </SignInWrapper>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
