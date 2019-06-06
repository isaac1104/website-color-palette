import React from 'react';
import styles from './PaletteColor.module.css';

const PaletteColor = ({ color, onClick }) => {
  const { hex } = color;
  return (
    <div
      className={styles.PaletteColor}
      style={{ backgroundColor: hex }}
      onClick={onClick}
    />
  );
};

export default PaletteColor;
