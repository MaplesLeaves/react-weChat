// 栅格 gtid
import React, { Component } from 'react'
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;
class gtid extends Component {
  render() {
    return (
      <div>
        <Title level={1}>栅格</Title>
        <Row gutter={8}>
          <Col span={6}>dfaklsdf</Col>
          <Col span={6}>dfaklsdf</Col>
          <Col span={6}>dfaklsdf</Col>
          <Col span={6}>dfaklsdf</Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
        </Row>
      </div>
    )
  }
}

export default gtid
