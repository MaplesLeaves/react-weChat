import React, { Component } from 'react'
import { Avatar, Badge } from 'antd';

export class avatar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <Avatar size={64} icon="user" />
        <Avatar size="large" icon="user" />
        <Avatar icon="user" />
        <Avatar size="small" icon="user" />
        <Avatar shape="square" size={64} icon="user" />
        <Avatar shape="square" size="large" icon="user" />
        <Avatar shape="square" icon="user" />
        <Avatar shape="square" size="small" icon="user" />
        <Avatar icon="user" />
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />

        <span style={{ marginRight: 24 }}>
          <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
        </span>
        <span>
          <Badge dot><Avatar shape="square" icon="user" /></Badge>
        </span>
      </div>
    )
  }
}

export default avatar
