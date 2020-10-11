import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavPl1 extends  Component{
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            navActive:false
        }
        this.navAppear = this.navAppear.bind(this);
        this.noNav = this.noNav.bind(this);
    }

    componentDidMount(){
        this.setState({width: window.innerWidth});
      }

    navAppear(){
        this.setState({navActive:true});
    };


    noNav(){
        this.setState({navActive:false});
    };

    render() {  
        console.log(this.state.width);
        let responsiveNav;

        let div;
        this.state.navActive ? 
           div = <nav className="nav">
                <ul className="nav-block-container"  onClick={this.noNav} >
                    <li><NavLink to="/" exact >Home</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/aboutme">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li></li>
                    <li><i className="fas fa-times"></i></li>
                </ul>
            </nav>
        : div = <></>;



        this.state.width <= 1000 ? 
        responsiveNav =  <>
             <div className="nav-icon" onClick={this.navAppear}><i className="fas fa-bars"></i></div>
            {div}   
        
        </> : responsiveNav =  <>
             <nav className="nav__desktop">
                <ul  onClick={this.noNav} >
                    <li><NavLink to="/" exact >Home</NavLink></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/aboutme">About Me</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>


        </>;

        return (
            <>
            {responsiveNav}
            </>
        )
    }
}