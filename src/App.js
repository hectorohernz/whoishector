import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Soon from './components/Soon';
import nonExist from './components/404';
import aboutMe from './components/Aboutme';
class App extends React.Component{
  render() {
    return (
      <Router>
      <main className="main-app">
        <Nav/>
      <Switch>
        <Route exact component={Intro} path="/"/>
        <Route  component={  Portfolio} path="/portfolio"/>
        <Route  component={ Soon } path="/contact"/>
        <Route  component={ Soon } path="/graphic"/>
        <Route  component={aboutMe } path="/aboutme"/>
        <Route  component={nonExist } path="*"/>
      </Switch>
      </main>
      </Router>
    )
  }
}

export default App;
