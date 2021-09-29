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
import SignInError from '../SignInError';

// DASHBOARD
import Dashboard from '../Dashboard';
import LoadingFullscreen from '../LoadingFullscreen';

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
        <Route exact path="/rf-admin">
          <SignInWrapper title="Se Connecter">
            <LogIn />
          </SignInWrapper>
        </Route>

        {/* SIGN UP */}
        <Route exact path="/rf-signup">
          <SignInWrapper title="Créer un compte">
            <SignUp />
          </SignInWrapper>
        </Route>

        {/* PASSWORD FORGOTTEN */}
        <Route exact path="/rf-pwd-forgotten">
          <SignInWrapper title="Mot de passe oublié">
            <ForgottenPassword />
          </SignInWrapper>
        </Route>

        {/* ERROR SIGN IN API */}
        <Route exact path="/rf-error">
          <SignInWrapper title="Erreur">
            <SignInError />
          </SignInWrapper>
        </Route>

        {/* DASHBOARD */}
        <Route exact path="/rf-dashboard">
          <Dashboard />
        </Route>

        {/* TESTING */}
        <Route exact path="/testing">
          <LoadingFullscreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
