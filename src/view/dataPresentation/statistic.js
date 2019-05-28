import React, { Component } from 'react'
import { Statistic, Row, Col, Button, Icon, Card } from 'antd';
const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
console.error(Date.now())
function onFinish() {
  console.log('finished!');
}
export class statistic extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={12}>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
            <Button style={{ marginTop: 16 }} type="primary">Recharge</Button>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Feedback" value={1128} prefix={<Icon type="like" />} />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{ color: '#3f8600' }}
                  prefix={<Icon type="arrow-up" />}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Idle"
                  value={9.3}
                  precision={2}
                  valueStyle={{ color: '#cf1322' }}
                  prefix={<Icon type="arrow-down" />}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <Row gutter={16}>
          <Col span={12}>
            <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
          </Col>
          <Col span={12}>
            <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
          </Col>
          <Col span={24} style={{ marginTop: 32 }}>
            <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default statistic
