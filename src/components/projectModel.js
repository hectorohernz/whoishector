import React, { Component } from 'react';
import { withRouter, NavLink, Redirect } from "react-router-dom";
import {projects} from '../db/Content.json';

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:  this.renderitem()
        }
        this.renderitem = this.renderitem.bind(this);
    }
    renderitem(){
        let item = projects.filter(project => project.title.toLowerCase().split("").filter( letter => letter !== ' ').join('') === this.props.match.params.projectId);
       return item;
    };
    
    
    render() {
        if(this.state.item.length === 0){
            return <Redirect to="/" />
        } 

        return (
            <section className="project-model-container">
                {this.state.item.map(project => 
                <>
                <img src={"." + project.image} alt={project.title}/>
                <h2>{project.title}</h2>
                <p className="project-model-description">{project.description}</p>
                <div className="project-model-container-links">
                    <a href={project.link} target="_blank">Live Demo</a>
                    <a href={project.github} target="_blank">Github</a>
                </div>
                <div className="tech-list">
                    <h5>Technologies</h5>
                    <div className="carousel-tech">
                        {project.tech.map(tool => 
                            <p className="tech-tools">{tool}</p>    
                        )}
                    </div>
                </div>
                <a href="/portfolio" className='target-to-port'>Back To Portfiolo</a>
                </>
                        )}
            </section>
        )
    }
}
export default withRouter(Project);
