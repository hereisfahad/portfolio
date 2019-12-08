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
      <p className="para">You can reach me on these platforms.</p>
    </div>
  );
}

export default Contact;
