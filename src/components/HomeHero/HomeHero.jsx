import { Component } from "react";

import Style from "./HomeHero.module.css";

import { Link } from "react-router-dom";

class HomeHero extends Component {
  render() {
    return (
      <div className="container">
        <div className={`${Style['home-hero']}`} >
          <h3>Proved By prodesigner</h3>
          <h1>Work that we produce for our clients</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <Link to="#">Get more details</Link>
        </div>
      </div >
    );
  }
}

export default HomeHero;
