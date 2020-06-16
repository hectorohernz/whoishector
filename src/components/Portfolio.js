import React, { Component } from 'react';
import data from '../db/Content.json';
import { v4 as uuidv4 } from 'uuid';
export default class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: data.projects
        }
    }
    render() {
        return (
            <>
              <section className="Portfilo">
                <h1>Projects</h1>
                <section className="card-container">
                    {this.state.data.map( project => 
                        <div className="id-card" key={project.id}>
                            <h3>{project.title}</h3>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
                           
                            <p>{project.description}</p>
                            <h4>Technologies Used</h4>
                            <ul>
                                {project.tags.map(item => <li key={uuidv4()}>{item}</li>)}
                            </ul>
                        </div>
                    )}

                </section>
               </section>
            </>
        )
    }
}