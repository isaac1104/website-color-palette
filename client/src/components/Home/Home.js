import React from 'react';
import { Col, Row } from 'antd';
import Palette from '../Palette/Palette';

const Home = () => {
  return (
    <Row>
      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
        <Palette />
      </Col>
    </Row>
  );
};

export default Home;
