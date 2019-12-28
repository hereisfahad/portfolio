import React from "react";

import "./contact.styles.css";
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          message: ""
        });
        alert("Success!");
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="showCaseDiv animated lightSpeedIn textDiv">
        <h2
          style={{
            color: "#9a9a3ec9",
            marginBottom: "1.5rem",
            fontFamily: "Crafty Girls"
          }}
        >
          Don't be a stranger
        </h2>
        <p style={{ color: "#3e3e36ed", marginBottom: "26px" }}>
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be a part of your
          visions.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <textarea
              placeholder="Message"
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}

export default Contact;
