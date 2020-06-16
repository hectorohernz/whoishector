import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Nav from './components/Nav'
import {Route, Switch} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Soon from './components/Soon'
class App extends React.Component{
  render() {
    return (
      <main className="main-app">
        <Nav/>
      <Switch>
        <Route exact render={ () =>  <Intro/>} path="/"/>
        <Route exact render={ () =>  <Portfolio />} path="/portfolio"/>
        <Route exact render={ () =>  <Soon />} path="/contact"/>
        <Route exact render={ () =>  <Soon />} path="/graphic"/>
        <Route exact render={ () =>  <Soon />} path="/aboutme"/>
      </Switch>
      </main>
    )
  }
}

export default App;
