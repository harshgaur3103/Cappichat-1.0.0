import React, { Component } from "react";
import "../css/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a
          href="https://github.com/harshgaur3103/CappiChat-1.0"
          target="_blank"
          rel="noopener noreferrer"
          className="left-footer"
        >
          ⭐ Star Project
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="right-footer"
        >
          © GitHub community
        </a>
      </div>
    );
  }
}
export default Footer;
