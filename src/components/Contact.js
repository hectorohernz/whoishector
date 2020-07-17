import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
export default class contact extends Component {
  /*
    constructor(props){
        super(props);
        this.onClickRedirect =  this.onClickRedirect.bind(this);

    }
    onClickRedirect(){
        
    }
    adding redirect
   */
    render() {
        return (
            <>
                <section className="contact-page-container">
                    <h1>Contact Me</h1>
                    <form name="contact" className="form-container"  method='post'>
                        <input type="hidden"  name="form-name" value="contact" />
                        <input type="text"  placeholder="Full Name" className="text-container" name="name"  required/>
                        <input type="email"  required placeholder="Email" className="text-container" name="email" />
                        <textarea  required  placeholder="Message" className="text-area"  name="message"></textarea>
                        <input type="submit" value="Send"/>
                    </form>
                </section>
                
            </>
        )
    }
}