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
        let item = projects.filter(project => project.id === Number(this.props.match.params.projectId));
       return item;
    };
    
    
    render() {
        if(this.state.item.length === 0){
            return <Redirect to="/"/>
        } else{
            console.log(this.state.item)
        }
        return (
            <section className="project-model-container">
                <h1>{this.props.match.params.projectId}</h1>
            </section>
        )
    }
}
export default withRouter(Project);
