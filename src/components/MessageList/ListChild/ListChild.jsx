import React, { Component } from 'react'
import './idnex.less'
import { Avatar } from 'antd';
export class ListChild extends Component {
  static propTypes = {

  }

  render() {
    return (
      <li className='topicList'>
        {
          this.props.message.type === 'text' ?
            <div className={
              this.props.message.user ? 'right' : 'left'
            }>
              <Avatar icon="user" className='nowOrder'  shape="square"/>
              <div>
                 {this.props.message.text}
              </div>
             
            </div> :
            <div className='tiemBox'>
              <span>{
                this.props.message.time
              }</span>
            </div>
        }
      </li>
    )
  }
}

export default ListChild
