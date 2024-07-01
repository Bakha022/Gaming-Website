import React, { Component } from 'react'
import customer1 from "../../assets/images/customer-1.svg";
import customer2 from "../../assets/images/customer-2.svg";
import customer3 from "../../assets/images/customer-3.svg";
import star from "../../assets/images/star.svg"

import styles from "./ServicesCustomer.module.css";
import Slider from 'react-slick';
export class ServicesCustomer extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    return (
      <div className={styles['services__customer--box']}>
        <div className={` container ${styles.services__customer}`}>
          <h2>Trusted by Thousands of Happy Customer</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .</p>
        </div>

        <div className={`container ${styles['services__customer--slider']}`}>
          <Slider {...settings}>
            <div className={styles['services__customer--slider--box']}>
              <div className={styles['services__customer--slider--box--top']}>
                <div className={styles['services__customer--slider--box--top--names']}>
                  <div><img src={customer1} alt="image"/></div>
                  <div className={styles['services__customer--slider--box--top--name']}>
                    <h2>Viezh Robert</h2>
                    <p>Warsaw, Poland</p>
                  </div>
                </div>
                <div className={styles['services__customer--slider--box--top--star']}>
                  <span>4.5</span>
                  <img src={star} alt=""/>
                </div>
              </div>

              <div className={styles['services__customer--slider--box--body']}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </div>
            </div>

            <div className={styles['services__customer--slider--box']}>
              <div className={styles['services__customer--slider--box--top']}>
                <div className={styles['services__customer--slider--box--top--names']}>
                  <div><img src={customer2} alt="image"/></div>
                  <div className={styles['services__customer--slider--box--top--name']}>
                    <h2>Yessica Christy</h2>
                    <p>Shanxi, China</p>
                  </div>
                </div>
                <div className={styles['services__customer--slider--box--top--star']}>
                  <span>4.5</span>
                  <img src={star} alt=""/>
                </div>
              </div>

              <div className={styles['services__customer--slider--box--body']}>
              Lorem Ipsum is simply dummy text of the printing and
              </div>
            </div>


            <div className={styles['services__customer--slider--box']}>
              <div className={styles['services__customer--slider--box--top']}>
                <div className={styles['services__customer--slider--box--top--names']}>
                  <div><img src={customer3} alt="image"/></div>
                  <div className={styles['services__customer--slider--box--top--name']}>
                    <h2>Kim Young Jou</h2>
                    <p>Kim Young Jou</p>
                  </div>
                </div>
                <div className={styles['services__customer--slider--box--top--star']}>
                  <span>4.5</span>
                  <img src={star} alt=""/>
                </div>
              </div>

              <div className={styles['services__customer--slider--box--body']}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>

          </Slider>
        </div>
      </div>
    )
  }
}

export default ServicesCustomer