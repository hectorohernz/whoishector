import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css'

export default class AboutMe extends Component {
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render() {
        return (
            <>
                <section className="about-me">
                    <article data-aos='fade-in' className="about-me-title">
                        <h1>About Me</h1>
                    </article>
                    <article className="about-content-container">
                        <p>I am a software engineer, who is a highly motivated and determined individual. I Strive to develop through aesthetic and functional design. I am currently a Software Developer Fellow at Road to Hire. Road to Hire connects underrepresented individuals to professional development and unique mentorship opportunities while learning to program full-stack applications. </p>
                        <img src="../images/headshot-hectorhernandez.png" alt="Hector Hernandez Headshot"/>
                    </article>
                </section>
            </>
        )
    }
}