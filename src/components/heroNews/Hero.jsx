import React, { Component } from 'react'
import { FaChevronRight } from "react-icons/fa"

import "./hero.css"

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <div className="container">
                    <div className="hero__items">
                        <a className="hero__items-href" href="/">
                            Home
                        </a>
                        <FaChevronRight className='text-white' size={14} />
                        <a className="hero__items-href" href="#">
                            News
                        </a>
                    </div>
                    <div className="hero__header">
                        <h1 className="hero__header-title">
                            Lorem Ipsum is simply dummy text of the printing and.
                        </h1>
                        <p className="hero__header-paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.{" "}
                        </p>
                        <form className="news-form" action="">
                            <input type="text" name="Search" placeholder="Search" />
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;