import React, { Component } from 'react';
import data from '../db/Content.json';
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.css'
import {
    Switch,
    Route
} from "react-router-dom";
import Project  from './projectModel';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.projects
        }
    }
    componentDidMount() {
        AOS.init({
            duration: 1000
        })
    }

    render() {
        return (
            <>
                <section className="portfoilo">
                    <article className="header-title" >
                        <h1 >Portfoilo</h1>

                    </article>
                    <section className="portfoilo-project-container">
                        {this.state.data.map(project =>
                            <div className="port-card" key={uuidv4()} data-aos="zoom-in">
                                <h3 >{project.title}</h3>
                                <img  src={project.image} className="port-image" alt={project.t} />
                              
                                <a href={`/portfolio/${project.title.toLowerCase().split("").filter( letter => letter !== ' ').join('')}`}>Learn More About This Project
                                          <i className="fas fa-long-arrow-alt-right"></i>
                                </a>
                            </div>
                        )}
                    </section>
                    <Switch>
                        <Route exact path={`/portfolio/:projectId`}>
                            <Project/>
                        </Route>
                    </Switch>
                </section>
            </>
        )
    }
}