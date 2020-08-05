import { Component } from "react";

import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default class extends Component {
  render() {
    return (
      <div className="layout-wrapper">
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>
              Hi, I’m Francis mwangi, a full stack software engineer based out
              of rural Wisconsin. I write about modern JavaScript and build
              coding courses that show people how to build real world
              applications.
            </p>
            <p>
              If you have any comments, ideas, critiques, or you just want to
              say hi, don’t hesitate to send me an email at
              nick@coderrocketfuel.com!
            </p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li>
                <strong>Email</strong>: mwas@gmail.com
              </li>
              <li>
                <strong>GitHub</strong>:{" "}
                <a href="https://github.com/francis-mwas">Francis Mwangi</a>
              </li>
              <li>
                <strong>Twitter</strong>:{" "}
                <a href="https://twitter.com/francis-mwas">
                  @francis-mwas on twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
