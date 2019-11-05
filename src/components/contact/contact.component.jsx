import React from "react";

function Contact() {
  const h2Styles = {
    color: "#9a9a3ec9",
    paddingTop: "0px",
    marginBottom: "1.5rem"
  };
  return (
    <div className="showCaseDiv animated lightSpeedIn">
      <h2 style={h2Styles}>Don't be a stranger</h2>
      <p style={{ color: "#3e3e36ed", marginBottom: "26px" }}>
        Feel free to get in touch with me. I am always open to discussing new
        projects, createive ideas or opportunity to be a part of you visions.
      </p>
      <p
        style={{
          borderBottom: "1px solid black",
          color: "#BBBBBD",
          marginBottom: "0"
        }}
      >
        You can reach me on these platforms.
      </p>
    </div>
  );
}

export default Contact;
