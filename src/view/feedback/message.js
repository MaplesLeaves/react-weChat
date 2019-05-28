import React, { Component } from 'react'
import { message, Button } from 'antd';
export class messageAll extends Component {
  info() {
    message.info('fhdjsahfdjkasdhfdas');
  }
  click(val) {
    message[val]('fhdjsahfdjkasdhfdas');
  }
  success = ()=> { // 使用提示回调  进行数据展示 
    message.loading('Action in progress..', 2.5)
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished is finished', 2.5));
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.info}>Display normal message</Button>,
        <Button onClick={e => this.click('success')}>Success</Button>
        <Button onClick={e => this.click('error')}>error</Button>
        <Button onClick={e => this.click('warning')}>Warning</Button>
        <Button onClick={this.success}>Display sequential messages</Button>

      </div>
    )
  }
}

export default messageAll
