import { Component } from "react";

import { Link } from "react-router-dom";
import Style from "./RecentProjects.module.css";

import img1 from "../../assets/images/img-1.png";
import img2 from "../../assets/images/img-2.png";
import img3 from "../../assets/images/img-3.png";
import img4 from "../../assets/images/img-4.png";
import img5 from "../../assets/images/img-5.png";
import img6 from "../../assets/images/img-6.png";
// import Subscribe from "../subscribe/Subscribe";

class RecentProjects extends Component {
  render() {
    return (
      <div className={`${Style['recent-project-wrapper']}`}>
        <div className="container">
          <div className={`${Style['recent-projects']}`}>
            <h2>Our Recent Projects</h2>
            <p className={`${Style['recent-projects-text']}`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={`${Style['recent-project-images']}`}>
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              <img src={img5} alt="" />
              <img src={img6} alt="" />
            </div>
            <Link to="/">SEE ALL</Link>
            {/* <Subscribe /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default RecentProjects;
