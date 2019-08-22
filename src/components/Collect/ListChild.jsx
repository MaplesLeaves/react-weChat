import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Avatar} from 'antd'
import './listChild.less'
export class ListChild extends Component {
  // static propTypes = {

  // }
  render() {
    const { title,text, time, source} = this.props.message
    return (
      <li className='childList'>
        <div>
          <Avatar icon="user" size={60} shape="square"/>
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        </div>
        <div>
          <p>时间: {time}</p>
          <p>来源: {source}</p>
        </div>
      </li>
    )
  }
}

export default ListChild
