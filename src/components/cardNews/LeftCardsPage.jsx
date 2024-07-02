import React, { Component } from "react";
import styles from "./Cards.module.css";
export class CardsPage extends Component {
    render() {
        const { image, button1, button2, header, paragraph1, paragraph2 } =
            this.props;
        return (
            <div className={styles['card']}>
                <div className={styles['card__image']}>
                    <img src={image} alt="hi" />
                </div>
                <div className={styles['card__btns']}>
                    <button className={styles['card__btn']}>{button1}</button>
                    <button className={styles['card__btn']}>{button2}</button>
                </div>
                <h3 className={styles['card__header']}>{header}</h3>
                <p className={styles['card__paragraph']}>{paragraph1}</p>
                <p className={styles['card__paragraph']}>{paragraph2}</p>
            </div>
        );
    }
}

export default CardsPage;