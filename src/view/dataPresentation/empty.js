import React, { Component } from 'react'
import { Empty, Button } from 'antd';

export class empty extends Component {
  render() {
    return (
      <div>
        <Empty />
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        <Empty
    image="https://img.alicdn.com/bao/uploaded/i2/TB1.zuUDG6qK1RjSZFmvk00PFXa_043412.jpg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
      </div>
    )
  }
}

export default empty
