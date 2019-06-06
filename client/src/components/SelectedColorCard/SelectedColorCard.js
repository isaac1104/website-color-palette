import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Typography, message } from 'antd';
import styles from './SelectedColorCard.module.css';
import ColorBlock from './ColorBlock';

class SelectedColorCard extends Component {
  renderColorDetail({ title, hex }, index) {
    return (
      <Typography
        key={index}
        className={styles.SelectedColorRow}
        onClick={() => this.handleCopyToClipboard(hex)}
      >
        {title}: {hex} <ColorBlock hex={hex} />
      </Typography>
    );
  }

  handleCopyToClipboard(hex) {
    navigator.clipboard.writeText(hex);
    message.success(`Copied ${hex} to clipboard!`);
  }

  render() {
    const { background, text, button, button_text } = this.props.selected_color;
    return (
      <Card className={styles.SelectedColorCard}>
        {this.renderColorDetail({ title: 'Background Color', hex: background })}
        {this.renderColorDetail({ title: 'Text Color', hex: text })}
        {this.renderColorDetail({ title: 'Button Color', hex: button })}
        {this.renderColorDetail({ title: 'Button Text Color', hex: button_text })}
      </Card>
    );
  }
}

const mapStateToProps = ({ selected_color }) => {
  return {
    selected_color
  };
};

export default connect(mapStateToProps)(SelectedColorCard);
