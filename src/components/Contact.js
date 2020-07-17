import React, { Component } from 'react';

export default class contact extends Component{
    render() {
        return (
            <>
                <section className="contact-page-container">
                    <h1>Contact Me</h1>
                        <form name="contact" data-netlify="true" method="/" className="form-container">
                            <input  className="text-container" type="text"  id="name" placeholder="Full Name" name="name"/>
                            <input  className="text-container"  type="email"  id="email" placeholder="Email" name="email"/>
                            <textarea className="text-area" placeholder="Message" name="message" rows="4" cols="50"></textarea>
                            <input type="submit" value="Send"/>
                        </form>
                </section>
            </>
        )
    }
}