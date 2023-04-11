import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Ad from './components/Ad';
import Subcontents from './components/Subcontents';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main>
        <Subcontents />
        <Subcontents />
        <Subcontents />
        <Ad />
      </Main>
    </div>
  );
}

export default App;

