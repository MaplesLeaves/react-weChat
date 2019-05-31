/*
 * @Description:  添加个人信息单独页面  根据组件之间的回调数值进行页面展示
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2019-05-30 11:57:18
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-05-30 16:59:49
 * @weChat: 893774884
 */
import React, { Component } from 'react'
import { Button, Avatar, } from 'antd';
import './index.less'
export class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {
        name: '枫起时、想你', // 网名
        anotherName: 'sinke', // 个人备注
        signature: '律政先锋、', // 签名
        region: '上海市、爱情公寓', // 地区
        weChatNumber: '00000', // 微信号
        source: '附近人添加', // 来源
        icon: '' // 用户头像
      }
    }
  }
  render() {
    const { name,anotherName,signature,region,weChatNumber,source,icon } = this.state.userInfo
    return (
      <div className='userInfo'>
        <div className="top">
          <div>
            <p>{name}</p>
            <p>{signature}</p>
          </div>
          <div>
            <Avatar src={require('@/userInfo1.jpg')} shape="square" size={80} />
          </div>
        </div>
        <ul className="list">
          <li><span>备注</span> {anotherName}</li>
          <li><span>地区</span> {region}</li>
          <li><span>微信号</span> {weChatNumber}</li>
          <li><span>来源</span> {source}</li>
        </ul>
        <div className="footer">
          <Button type='primary'>发消息</Button>
        </div>
      </div>
    )
  }
}

export default Index
