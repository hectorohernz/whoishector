import React, { Component } from 'react';

export default class contact extends Component {
    render() {
        return (
            <>
                <section className="contact-page-container">
                    <h1>Contact Me</h1>
                    <form name="contact" method='post'>
                        s<input type="hidden" name="form-name" value="contact" />
                        <input type="text" name="name" />
                        <input type="email" name="email" />
                        <textarea name="message"></textarea>
                    </form>
                </section>
                
            </>
        )
    }
}