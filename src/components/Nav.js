import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


export default class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            navActive:false
        } 
        this.navAppear = this.navAppear.bind(this);
        this.noNav = this.noNav.bind(this);
    }
    
      
    navAppear(){
        this.setState({navActive:true});
    };
    noNav(){
        this.setState({navActive:false});
    };
    render() {  
        let div;
        this.state.navActive ? 
           div = <nav className="nav">
                <ul className="nav-block-container"  onClick={this.noNav} >
                    <li><NavLink to="/" exact >Home</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/aboutme">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact Info</NavLink></li>
                    <li></li>
                    <li><i className="fas fa-times"></i></li>
                </ul>
            </nav>
        : div = <></>
        return (
            <>
            <div className="nav-icon" onClick={this.navAppear}><i className="fas fa-bars"></i></div>

           
            {div}
            </>
        )
    }
}