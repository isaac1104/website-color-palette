import React from 'react';
import styles from './SelectedColorCard.module.css';

const ColorBlock = ({ hex }) => {
  return <div className={styles.ColorBlock} style={{ backgroundColor: hex }} />;
};

export default ColorBlock;
