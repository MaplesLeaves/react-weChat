/*
 * @Description: 人员列表  展示人员进行操作信息
 * @Version: 2.0
 * @Autor: maoleLeaves
 * @Date: 2019-05-29 11:03:00
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-05-29 16:54:19
 * @weChat: 893774884
 */
import React, { Component } from 'react'
import { List, Avatar } from 'antd';
import './index.less'

export class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          title: '张三',
          key: 1,
        },
        {
          title: '李四',
          key: 2
        },
        {
          title: '王五',
          key: 3
        },
        {
          title: '刘备  ',
          key: 4
        },
      ],
      nowIndex: 1
    }
  }
  onclick(data){
    this.setState({
      nowIndex: data.key
    })
  }
  
  render() {
    return (
      <div className='userList'>
        <List
          itemLayout="horizontal"
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item onClick={this.onclick.bind(this,item)} style={{
              background: this.state.nowIndex === item.key ? '#C8C6C6': '',
              padding: '10px'
            }}>
              <List.Item.Meta                
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={
                  <p className='title'>
                  <span>{item.title}</span>
                  <span>19/8/22</span>
                  </p>
                }
                description={
                  <p style={{
                    width: '180px',
                    overflow:"hidden",
                    textOverflow:"ellipsis",
                    whiteSpace:"nowrap",
                    margin: "0px"
                  }}>dfhajkshdfafhasdjkhfjkashfjkashdfjkhasjkdfhjaksghfjkasghdfjkashdfjkahsjkdfhkjashdfjkash</p>
                }
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default Index
