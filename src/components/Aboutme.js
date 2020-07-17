import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css'

export default class AboutMe extends Component {
    componentDidMount() {
        AOS.init({
            duration: 2000
        });
        document.title = "About Hector Hernandez"
    }

    render() {
        return (
            <>
                <section className="about-me">
                    <article data-aos='fade-in' className="about-me-title">
                        <h1>About Me</h1>
                    </article>
                    <article className="about-content-container">
                        <p>I'm a software engineer specialised in frontend and backend development for complex scalable web apps, who is a highly motivated and determined individual. I Strive to develop through aesthetic and functional design. </p>
                        <img src="../images/headshot-hectorhernandez.png" alt="Hector Hernandez Headshot" />
                    </article>
                    <article className="skills-container">
                        <h1>What I Do</h1>
                        <p className="skill-para">Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
                        <div className="skills-list">
                            <div className="single-skills">
                                <i className="fab fa-js-square javascript-icon"></i>
                                <p>Vanilla JavaScript</p>
                            </div>
                            <div className="single-skills">
                                <i className="fab fa-react  react-icon"></i>
                                <p>ReactJs</p>
                            </div>
                            <div className="single-skills">
                                <i className="fab fa-node-js node-js-icon"></i>
                                <p>NodeJS</p>
                            </div>
                            <div className="single-skills">
                                <i className="fab fa-npm npm-js-icon"></i>
                                <p>Npm</p>
                            </div>
                            <div className="single-skills">
                                <i className="fab fa-html5 html5-icon"></i>
                                <p>Html5</p>
                            </div>
                            <div className="single-skills">
                                <i className="fab fa-css3-alt css-icon"></i>
                                <p>CSS</p>
                            </div>
                            <div className="single-skills">
                                <i className="fab fa-sass sass-icon"></i>
                                <p>SCSS</p>
                            </div>
                            <div className="single-skills">
                             <i className="fas fa-database database-icon"></i>
                                <p>MongoDB & MySql</p>
                            </div>
                        </div>
                    </article>
                </section>
            </>
        )
    }
}