/*
 * @Description: 人员列表  展示人员进行操作信息
 * @Version: 2.0
 * @Autor: maoleLeaves
 * @Date: 2019-05-29 11:03:00
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-06-25 15:49:00
 * @weChat: 893774884
 */
import React, { Component } from 'react'
import { List, Avatar } from 'antd';
import './index.less'

export class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      nowIndex: 1
    }
  }
  onclick(data){
    this.setState({
      nowIndex: data.id
    })
    this.props.nowClick(data);
  }
  render() {
    return (
      <div className='userList'>
        <List
          itemLayout="horizontal"
          dataSource={this.props.data}
          renderItem={item => (
            <List.Item onClick={this.onclick.bind(this,item)} style={{
              background: this.state.nowIndex === item.id ? '#C8C6C6': '',
              padding: '10px'
            }}>
              <List.Item.Meta                
                avatar={<Avatar src={item.icon} />}
                title={
                  <p className='title'>
                  <span>{item.userName}</span>
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
                  }}>{item.newContent}</p>
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
