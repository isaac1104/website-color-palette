import React from 'react';
import { Col, Row } from 'antd';
import Palette from '../Palette/Palette';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Row className={styles.Home}>
      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
        <Palette />
      </Col>
    </Row>
  );
};

export default Home;
