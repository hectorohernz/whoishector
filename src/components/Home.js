import React, { Component } from 'react';

export default class Home extends Component{
   render() {
       return (
                <section className="home">
                    <div className="home--title">
                        <h1>Hi, My name is</h1>
                        <h2>Hector Hernandez.</h2>
                        <h3>I build things for the web.</h3>
                    </div>
                    <div className="home--description">
                        <p>I'm an aspiring full stack <b>Software Engineer</b> based in <b>Charlotte, NC</b>, specializing in developing quality websites and applications. Currently working at <b>Bank of America</b> as a <b>Front End Engineer.</b> </p>
                        <p>I love hiking, traveling, cooking, working on side projects, and learning new things.</p>
                    </div>
                    <div className="home--links">
                        <h3>Get In Touch</h3>
                        <ul>
                            <li><a href="https://github.com/hectorohernz" target="_blank" rel="noopener noreferrer" aria-label="Github">Github</a></li>
                            <li><a href="https://linkedin.com/in/hector-hernandez-383444196" rel="noopener noreferrer" target="_blank">Linkedin</a></li>
                            <li><a href="mailto:hectorohernz@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a></li>
                        </ul>
                    </div>
                    <p className="quote">True Love Will Find You In The End.</p>
                </section>
       )
   }
}