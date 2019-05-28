import React, { Component } from 'react'
import userInfo1 from './../../images/userInfo1.jpg'
import  './index.less';
export default class userInfo extends Component {
  constructor(props){
    super(props);
    console.error(this.props)
  }
  render() {
    return (
      <div className='userInfo'>
        <h1>李鑫</h1> 
        <strong>
          (mapleLeaves大鑫)
        </strong>
        <div>
        <img src={userInfo1}  className='userIcon'/>
        </div>
      </div>
    )
  }
}
