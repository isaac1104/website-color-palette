import React from 'react';
import styles from './PaletteColor.module.css';

const PaletteColor = ({ color }) => {
  const { hex } = color;
  return (
    <div
      className={styles.PaletteColor}
      style={{ backgroundColor: hex }}
    />
  );
};

export default PaletteColor;
