import React from "react";

import "./contact.styles.css";

function Contact() {
  const h2Styles = {
    color: "#9a9a3ec9",
    marginBottom: "1.5rem"
  };
  return (
    <div className="showCaseDiv animated lightSpeedIn textDiv">
      <h2 style={h2Styles}>Don't be a stranger</h2>
      <p style={{ color: "#3e3e36ed", marginBottom: "26px" }}>
        Feel free to get in touch with me. I am always open to discussing new
        projects, creative ideas or opportunities to be a part of your visions.
      </p>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
}

export default Contact;
