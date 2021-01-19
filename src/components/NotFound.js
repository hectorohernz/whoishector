import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <>
        <section className="notfound">
          <h1>Page Not Found</h1>
          <p>But since your here, enjoy some good music. Updated weekly</p>
          <div className="iframe">
            <iframe
              src="https://www.youtube.com/embed/u5CVsCnxyXg"
            ></iframe>
          </div>
          <a href="/">Go Back Home</a>
        </section>
      </>
    );
  }
}

export default NotFound;
