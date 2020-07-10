import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Intro extends Component{
    componentDidMount(){
        AOS.init({
          duration : 2500
        })
      }
    render() {
        return (
            <>
            <section className="intro" data-aos='fade-in'>
               <h1 className="intro--text">Who Is Hector Hernandez</h1>
            </section>
            <section className="intro-about-me">
                <p  data-aos="fade-right" >A Software Engineer, who is passionate about the future of technology and Graphic Design.</p>
                <a href="/portfolio" data-aos="fade-right">Click Here To View Projects <i class="fas fa-long-arrow-alt-right"></i></a>
                <img  data-aos="fade-left" src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="Programming Image"/>
            </section>
            </>
        )
    }
}