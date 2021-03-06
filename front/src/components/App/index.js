import React from 'react';

// MY COMPONENTS
import Header from '../Header';
import HomeIntro from '../HomeIntro';
import WhoAreWe from '../WhoAreWe';
import LogoCarousel from '../LogoCarousel';
import Methods from '../Methods';
import Ranking from '../Ranking';
import Footer from '../Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <HomeIntro />
      <WhoAreWe />
      <LogoCarousel />
      <Methods />
      <Ranking />
      <Footer />
    </div>
  );
}

export default App;
