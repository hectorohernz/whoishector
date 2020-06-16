import React, { Component } from 'react';
import data from '../db/Content.json';
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
              <section className="Portfilo">
                <h1>Projects</h1>

                <section className="card-container">
                    {this.state.data.map( project => 
                        <div className="id-card" key={project.id}  data-aos='zoom-in'>
                            <div className="flip-card-inner">
                                <div class="flip-card-front">
                                    <div className={`card-image card-image-${project.id}`}></div>
                                    <h5>{project.title}</h5>
                                </div>
                                <div className="flip-card-back">
                                        <h3>{project.title}</h3>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
                                        <p>{project.description}</p>
                                        <h4>Technologies Used</h4>
                                        <ul>
                                            {project.tags.map(item => <li key={uuidv4()}>{item}</li>)}
                                        </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
               </section>
            </>
        )
    }
}