import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css'

export default class Footer extends Component {
  
    render() {
        return (
            <>
            <footer>
            <div className="contact-container">
                <div  className="contact-infomation">
                    <a rel="noopener noreferrer" href="mailto:hi@whoishector.com">hi@whoishector.com</a>
                    <a  rel="noopener noreferrer" href="tel:+1 (703)-565-8477">+1 (703)-565-8477</a>
                </div>
                <p>Based in Charlotte, NC</p>
            </div>
            <div className="contact-links">
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/hectorohernz">Github,</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/hector-hernandez-383444196/">Linkedin</a>
            </div>
            </footer>
           
            </>
        )
    }
}