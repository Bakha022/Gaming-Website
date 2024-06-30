import { Component } from "react";
import Style from "./Subscribe.module.css";

class Subscribe extends Component {
    render() {
        const { formColor, textColors, inputColor, buttonColor } = this.props;

        return (
            <div className={`${Style['subscribe']}`}>
                <h3>Lorem Ipsum</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
                <form style={{ backgroundColor: formColor }}>
                    <div className={`${Style['form-info']}`}>
                        <h4 style={{ color: textColors }}>Stay in the loop</h4>
                        <p style={{ color: textColors }}>
                            Subscribe to receive the latest news and updates about TDA. We
                            promise not to spam you!
                        </p>
                    </div>
                    <div style={{ backgroundColor: inputColor }} className={`${Style['email-wrapper']}`}>
                        <input
                            type="email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                            required
                            placeholder="Enter email address"
                        />
                        <button style={{ backgroundColor: buttonColor }} >Continue</button>
                    </div>
                </form >
            </div >
        );
    }
}

export default Subscribe;
