import React, { Component } from 'react';

export default class contact extends Component {
    render() {
        return (
            <>
                <section className="contact-page-container">
                    <h1>Contact Me</h1>
                    <form name="contact" className="form-container"  method='post'>
                        <input type="hidden"  name="form-name" value="contact" />
                        <input type="text"  placeholder="Full Name" className="text-container" name="name" />
                        <input type="email"  placeholder="Email" className="text-container" name="email" />
                        <textarea   placeholder="Message" className="text-area"  name="message"></textarea>
                        <input type="submit" value="Send"/>
                    </form>
                </section>
                
            </>
        )
    }
}