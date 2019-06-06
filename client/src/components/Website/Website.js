import React, { Component } from 'react';
import { Button, Typography } from 'antd';
import styles from './Website.module.css';
import macbook from '../../assets/macbook_pro_15.png';

const { Title } = Typography;

class Website extends Component {
  render() {
    return (
      <div
        className={styles.WebsiteContainer}
      >
        <div className={styles.WebsiteHeader}>
          <Title level={4}>Macbook Pro</Title>
          <Title level={2}>More power.</Title>
          <Title level={2}>More performance.</Title>
          <Title level={2}>More pro.</Title>
        </div>
        <div className={styles.WebsiteProduct}>
          <div>
            <Title level={4}>Touch Bar and Touch ID</Title>
            <Title level={4}>2.6GHz 6-Core Processor with Turbo Boost up to 4.5GHz</Title>
            <Title level={4}>256GB Storage</Title>
            <Title level={2}>$2,399.00</Title>
            <Typography>2.6GHz 6-core 9th-generation Intel Core i7 processor</Typography>
            <Typography>Turbo Boost up to 4.5GHz</Typography>
            <Typography>Radeon Pro 555X with 4GB of GDDR5 memory</Typography>
            <Typography>16GB 2400MHz DDR4 memory</Typography>
            <Typography>256GB SSD storage</Typography>
            <Typography>Retina display with True Tone</Typography>
            <Typography>Touch Bar and Touch ID</Typography>
            <Typography>Four Thunderbolt 3 ports</Typography>
            <Button size='large' className={styles.BuyNowButton}>Buy Now!</Button>
          </div>
          <img src={macbook} alt='Macbook Pro 15-inch' className={styles.ProductImage} />
        </div>
      </div>
    );
  }
}

export default Website;
