import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';
import styles from './Website.module.css';
import macbook from '../../assets/macbook_pro_15.png';
import { HEADERS, TEXTS } from './WebsiteContents';

const { Title } = Typography;

class Website extends Component {
  state = {
    background: '#ffffff',
    text: '#000000',
    button: '#ffffff'
  };

  renderHeaders(section) {
    return HEADERS[section].map(({ content, level }, index) => (
      <Title
        key={index}
        level={level}
        style={{ color: 'black' }}
      >
        {content}
      </Title>
    ));
  }

  renderTexts() {
    return TEXTS.map(({ content }, index) => <Typography key={index} style={{ color: this.state.text }}>{content}</Typography>);
  }

  render() {
    console.log(this.props.selected_color);
    return (
      <div
        className={styles.WebsiteContainer}
        style={{ backgroundColor: this.state.background }}
      >
        <div className={styles.WebsiteHeader}>
          {this.renderHeaders('top')}
        </div>
        <div className={styles.WebsiteProduct}>
          <div>
            {this.renderHeaders('bottom')}
            {this.renderTexts()}
            <Button
              size='large'
              className={styles.BuyNowButton}
              style={{ backgroundColor: this.state.button }}
            >
              Buy Now!
            </Button>
          </div>
          <img src={macbook} alt='Macbook Pro 15-inch' className={styles.ProductImage} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ selected_color }) => {
  return {
    selected_color
  };
};

export default connect(mapStateToProps)(Website);
