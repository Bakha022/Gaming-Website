import { Component } from "react";

import { Link } from "react-router-dom";

import TrandingGamesData from "../../constants/TrandingGamesData";

import Style from "./TrandingGames.module.css";

import fire from "../../assets/svg/fire.svg";


class TrandingGames extends Component {
  render() {
    return (
      <section className="container">
        <div className={`${Style['tranding-games']}`}>
          <div className={`${Style['tranding-games__head']}`}>
            <h3>Currently Trending Games</h3>
            <Link to="/">SEE ALL</Link>
          </div>
          <div className={`${Style['tranding-games__cards']}`}>
            {
              TrandingGamesData.map((el) => {
                return (
                  <div key={el.id} className={`${Style['card']}`}>
                    <div className={`${Style['card-top']}`}>
                      <img src={el.image} alt="" />
                    </div>
                    <h2>
                      <img src={fire} alt="" /> 40 Followers
                    </h2>
                  </div>
                );
              })
            }
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </section>
    );
  }
}

export default TrandingGames;
