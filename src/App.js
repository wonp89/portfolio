import React, { Component } from 'react';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import Portfolio from './components/Portfolio.js';
import PortfolioList from './components/PortfolioList.js';
import Contact from './components/Contact.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Portfolio />
        <PortfolioList />
        <Contact />
      </div>
    );
  }
}

export default App;
