import React, { Component } from 'react'
import './CollectList.less'
import ListChild from './ListChild'

export class CollectList extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          icon: '发生', // 头像
          title: '发生' , // 标题
          time: '发送到', // 时间
          source: '放大' , // 来源
          text: '发送到' , // 描述
        },
        {
          icon: '发生', // 头像
          title: '发生' , // 标题
          time: '发送到', // 时间
          source: '放大' , // 来源
          text: '发送到' , // 描述
        },
        {
          icon: '发生', // 头像
          title: '发生' , // 标题
          time: '发送到', // 时间
          source: '放大' , // 来源
          text: '发送到' , // 描述
        },
        {
          icon: '发生', // 头像
          title: '发生' , // 标题
          time: '发送到', // 时间
          source: '放大' , // 来源
          text: '发送到' , // 描述
        },
      ]
    }
  }
  click = () => {
  }
  render() {
    return (
      <ul className='collectList'>
        {
          this.state.data.map((item,index) => {
            return <ListChild key={index}  message={item}/>
          })
        }
      </ul>
    )
  }
}

export default CollectList
