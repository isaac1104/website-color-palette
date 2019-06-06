import React from 'react';
import { Icon, Spin } from 'antd';
import classes from './Spinner.module.css';

const Spinner = () => (
<div className={classes.SpinnerContainer}>
<Spin
  indicator={
    <Icon
      type='loading'
      className={classes.Spinner}
    />
  }
/>
</div>
);

export default Spinner;
