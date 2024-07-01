import React, { Component } from 'react';
import styles from './ServicesAdvertising.module.css';

export class ServicesAdvertising extends Component {
  render() {
    let { servicesAdvertising } = this.props;
    return (
      <div>
        {servicesAdvertising.map((data) => {
          return (
            <div key={data.id} className={`container ${styles.services__advertising}`} style={{flexDirection: data.isTextLeft ? 'row' : 'row-reverse', marginBottom: '20px' }}>
              <div className="services__advertising--left" style={{ flex: 1, padding: '10px' }}>
                <img src={data.img} alt="" style={{ width: '100%' }} />
              </div>
              <div className={styles['services__advertising--right']} style={{ flex: 1, padding: '10px' }}>
                <h2>Lorem Ipsum is simply dummy text dummy text</h2>

                <p className={styles['first--text']}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button>Read more</button>
              </div>

            </div>
          );
        })}
      </div>
    );
  }
}

export default ServicesAdvertising;
