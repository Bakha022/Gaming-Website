import { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import HomeBannerData from "../../constants/HomeBannerData";

import Style from "./HomeBanner.module.css";

class HomeBanner extends Component {
  render() {
    return (
      <section className={`${Style['homeBanner']}`}>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <div className={`${Style['homeBanner-cards']}`}>
          {
            HomeBannerData.map((el) => {
              return (
                <div key={el.id} className={`${Style['homeBanner-card']}`}>
                  <div className={`${Style['homeBanner-card-top']}`}>
                    <img src={el.image} alt="" />
                  </div>
                  <h4>{el.title}</h4>
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" color="red" />
                  </Link>
                </div>
              )
            })
          }
        </div>
      </section >
    );
  }
}

export default HomeBanner;
