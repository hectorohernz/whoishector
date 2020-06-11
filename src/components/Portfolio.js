import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Portfolio extends Component{
    render() {
        return (
            <>
              <section className="Portfilo">
                <h1>Coming Soon</h1>
                <h1><NavLink to="/" exact >Home</NavLink></h1>
               </section>
            </>
        )
    }
}