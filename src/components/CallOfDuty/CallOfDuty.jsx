import { Component } from "react";

import img from "../../assets/images/call-of-duty.png";
import decor from "../../assets/images/decoration.png";

import Style from "./CallOfDuty.module.css";

class CallOfDuty extends Component {
  render() {
    return (
      <div className="container">
        <div className={`${Style['callOfDuty']}`}>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <img src={img} alt="Call Of Duty img" />
          <img className={`${Style['decor']}`} src={decor} alt="Decoration img" />
        </div>
      </div>
    );
  }
}

export default CallOfDuty;
