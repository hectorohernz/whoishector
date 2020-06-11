import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Intro extends Component{
    componentDidMount(){
        AOS.init({
          duration : 2200
        })
      }
    render() {
        return (
            <>
            <section className="intro" data-aos='fade-in'>
                <p className="intro--text">Hi there!</p>
                <p className="intro--name">I'm Hector.</p>
                <h1 className="aboutme-container">A Software Engineer, who is passionate about the future of technology and Graphic Design. </h1>
                <h1 className="second-about-container">I Strive to develop through aesthetic and functional design. My only goal is for a better future.</h1>
            </section>
        
            </>
        )
    }
}