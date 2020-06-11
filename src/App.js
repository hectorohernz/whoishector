import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Nav from './components/Nav'
import {Route, Switch} from 'react-router-dom';
import Portfolio from './components/Portfolio';

class App extends React.Component{
  render() {
    return (
      <main className="main-app">
        <Nav/>
      <Switch>
        <Route exact render={ () =>  <Intro/>} path="/"/>
        <Route exact render={ () =>  <Portfolio />} path="/portfolio"/>
      </Switch>
      </main>
    )
  }
}

export default App;
