import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Soon extends Component{
    render() {
        return (
            <>
                <section className="soon">
                    <h1>Sorry This Page Is Under Development.</h1>
                    <NavLink to="/" exact >Go Back To Home</NavLink>
                </section>
            </>
        )
    }
}