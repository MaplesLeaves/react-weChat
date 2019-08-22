/*
 * @Description:  添加个人信息单独页面  根据组件之间的回调数值进行页面展示
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2019-05-30 11:57:18
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-06-20 18:12:35
 * @weChat: 893774884
 */
import React, { Component } from 'react'
import { Button, Avatar, } from 'antd';
import './index.less'
export class Index extends Component {
  constructor(props) {
    super(props);
  }
  clickGo = () => {

  }
  render() {
    const message = this.props.message;
    return (
      <div className='userInfo'>
        <div className="top">
          <div>
            <p>{message ? message.userName : ''}</p>
            <p>{message ? message.signature : ''}</p>
          </div>
          <div>
            <Avatar src={message ? message.icon : ''} shape="square" size={80} />
          </div>
        </div>
        <ul className="list">
          <li><span>备注</span> {message ? message.alias : ''}</li>
          <li><span>地区</span> {message ? message.position : ''}</li>
          <li><span>微信号</span> {message ? message.weChatNum : ''}</li>
          <li><span>来源</span> {message ? message.source : ''}</li>
        </ul>
        <div className="footer">
          <Button type='primary' onClick={this.clickGo}>发消息</Button>
        </div>
      </div>
    )
  }
}

export default Index
