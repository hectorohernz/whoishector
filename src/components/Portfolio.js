import React, { Component } from 'react';
import data from '../db/Content.json';
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css'

export default class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: data.projects
        }
    }
    componentDidMount(){
        AOS.init({
          duration : 1000
        })
      }

    render() {
        return (
            <>
              <section className="portfoilo">
                   <article className="header-title" >
                            <h1 data-aos="zoom-in">Portfoilo</h1>
                            <img data-aos="zoom-in" src="https://images.unsplash.com/photo-1506287375451-bb850eba44d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80" alt="computer-screen"/>
                   </article>
                   <div className="empty"></div>
                   <section className="portfoilo-project-container">
                                <div className="port-card">
                                    <h3  data-aos="zoom-in">Tokyo</h3>
                                    <img   data-aos="zoom-in" src="./images/tokyo.png" className="port-image" alt=""/>
                                    <p  data-aos="zoom-in" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <a  data-aos="zoom-in"  href="/">Learn More About This Project
                                    <i class="fas fa-long-arrow-alt-right"></i>
                                    </a>
                                </div>
                   </section>
               </section>
            </>
        )
    }
}