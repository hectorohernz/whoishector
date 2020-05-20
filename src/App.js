import React from 'react';
import './App.css';

class App extends React.Component{
  render() {
    return (
      <main className="main-app">
        <div>
          <h1>Portfolio Coming Soon..</h1>
          <p>Created By Hector Hernandez</p>
        </div>
        
        <div className="contact">
          <a href="https://github.com/hectorohernz" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/hector-hernandez-383444196" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
      </main>
    )
  }
}

export default App;
