/*
 * @Description:  聊天列表  展示与好友进行聊天的信息数据
 * @Version: 2.0
 * @Autor: maoleLeaves
 * @Date: 2019-05-29 16:44:42
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-05-30 11:48:59
 * @weChat: 893774884
 */
import React, { Component } from 'react'
import './index.less'
import ListChild from './ListChild/ListChild'

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          user: 1,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'time',
          time: '12:36'
        },
        {
          user: 0,
          text: '我说的',
          name: '张三',
          type: 'text'
        },
      ]
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.messageList.scrollTop = this.refs.messageList.scrollHeight
    }, 0)
  }
  componentDidUpdate() {
    /**
     * @description: 进行判断  当父组件有新的值传递过来  那么我们可以将其和当前的新值进行合并产生新的列表进行渲染
     * @Date: 2019-05-30 09:55:21
     */
    if (this.props.messageInfo !== this.state.data[this.state.data.length - 1]) {
      const data = this.state.data;
      data.push(this.props.messageInfo)
      this.setState({
        data: data
      })
    }
    setTimeout(() => {
      this.refs.messageList.scrollTop = this.refs.messageList.scrollHeight
    }, 0)
  }
  render() {
    return (
      <ul className='messageList' ref='messageList'>
        {
          this.state.data.map((item, index) => {
            return <ListChild key={index} message={item} />
          })
        }
      </ul>
    )
  }
}

export default Index
