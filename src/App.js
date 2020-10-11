import React from 'react';
import './App.css';
import Intro from './components/Intro';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Soon from './components/Soon';
import nonExist from './components/404';
import aboutMe from './components/Aboutme';
import Project from './components/projectModel';
import Footer from './components/Footer';
import PlineNav from './pipeline-1/Nav';

class App extends React.Component{
  render() {
    return (
      <Router>
     <PlineNav/>
      <main className="main-app">
      <Switch>
        <Route exact component={Intro} path="/"/>
        <Route  component={  nonExist} path="/portfolio"/>
        <Route  component={ Contact } path="/contact"/>
        <Route  component={ Soon } path="/graphic"/>
        <Route  component={aboutMe } path="/aboutme"/>
        <Route exact path="/:projectId" component={Project} />
      </Switch>
      </main>
      <Footer/>
      </Router>
    )
  }
}

export default App;
