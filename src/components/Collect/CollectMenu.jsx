import React, { Component } from 'react'
import { List, Avatar } from 'antd';
import  './collectMenu.less'

export class CollectMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          icon: '',
          text: '全部收藏',
          key: 1
        },
        {
          icon: '',
          text: '链接',
          key: 2
        },
        {
          icon: '',
          text: '相册',
          key: 3
        },
        {
          icon: '',
          text: '笔记',
          key: 4
        },
        {
          icon: '',
          text: '文件',
          key: 5
        },
        {
          icon: '',
          text: '音乐',
          key: 6
        }
      ],
      nowIndex: 1
    }
  }
  click(val){
    this.setState({
      nowIndex: val
    })
  }
  render() {
    const {data, nowIndex} = this.state
    return (
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item 
          onClick = {this.click.bind(this,item.key)}
          style={{
            background: nowIndex=== item.key ? '#C8C6C6': '',
            padding: '10px'
          }}>
            <Avatar icon="user" shape="square" />
            <strong className='userText'>{item.text}</strong>
          </List.Item>
        )}
      />
    )
  }
}

export default CollectMenu
