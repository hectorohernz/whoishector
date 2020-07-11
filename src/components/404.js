import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class nonExist extends Component{
    render() {
        return (
            <>
                <section className="soon">
                    <h1>Sorry The Page You Looking For Doesn't Exist</h1>
                    <NavLink to="/" exact >Go Back To Home</NavLink>
                </section>
            </>
        )
    }
}