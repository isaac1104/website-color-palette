import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from 'antd';
import styles from './Website.module.css';
import macbook from '../../assets/macbook_pro_15.png';
import { HEADERS, TEXTS } from './WebsiteContents';
import SelectedColorCard from '../SelectedColorCard/SelectedColorCard';

const { Title } = Typography;

class Website extends Component {
  renderHeaders({ section, color }) {
    return HEADERS[section].map(({ content, level }, index) => (
      <Title
        key={index}
        level={level}
        style={{ color }}
        className={styles.WebsiteText}
      >
        {content}
      </Title>
    ));
  }

  renderTexts(color) {
    return TEXTS.map(({ content }, index) => (
      <Typography
        key={index}
        style={{ color }}
        className={styles.WebsiteText}
      >
        {content}
      </Typography>
    ));
  }

  render() {
    const { background, text, button, button_text } = this.props.selected_color;
    return (
      <div
        className={styles.WebsiteContainer}
        style={{ backgroundColor: background }}
      >
        <div className={styles.WebsiteHeader}>
          {this.renderHeaders({ section: 'top', color: text  })}
        </div>
        <div className={styles.WebsiteProduct}>
          <div>
            {this.renderHeaders({ section: 'bottom', color: text })}
            {this.renderTexts(text)}
            <Button
              size='large'
              className={styles.BuyNowButton}
              style={{ backgroundColor: button, color: button_text, borderColor: button }}
            >
              Buy Now!
            </Button>
          </div>
          <img src={macbook} alt='Macbook Pro 15-inch' className={styles.ProductImage} />
        </div>
        <SelectedColorCard />
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
