import React from 'react';
import { Popover } from 'antd';
import styles from './PaletteColor.module.css';

const PaletteColor = ({ color, onClick }) => {
  const { hex, name } = color;
  return (
    <Popover content={name}>
      <div
        className={styles.PaletteColor}
        style={{ backgroundColor: hex }}
        onClick={onClick}
      />
    </Popover>
  );
};

export default PaletteColor;
