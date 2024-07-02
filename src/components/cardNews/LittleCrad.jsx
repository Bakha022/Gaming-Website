import React, { Component } from "react";
import styles from "./Cards.module.css";
export class LittleCard extends Component {
    render() {
        const { image, btn1, btn2, title, color } = this.props;
        console.log(image);
        return (
            <div className={styles['litle__card']}>
                <div className={styles['litle__card-img']}>
                    <img src={image} alt="hello" />
                </div>
                <div className={styles['litle__card-items']}>
                    <div className={styles['card__btns']}>
                        <button
                            className={styles['card__btn']}
                            style={{ backgroundColor: `${color}` }}
                        >
                            {btn1}
                        </button>
                        <button className={styles['card__btn']}>{btn2}</button>
                    </div>
                    <h4 className={styles['litle__card-header']}>{title}</h4>
                </div>
            </div>
        );
    }
}

export default LittleCard;