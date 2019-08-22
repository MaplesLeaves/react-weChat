/*
 * @Description:  输入框组件  包含input文本输入框 header title操作栏
 * @Version: 2.0
 * @Autor: maoleLeaves
 * @Date: 2019-05-29 16:46:20
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-06-25 15:09:56
 * @weChat: 893774884
 */
import React, { Component } from 'react'
import { Button } from 'antd';
import './index.less'
export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNow: false,
      value: ''
    }
  }
  focus = () => {
    this.setState({
      isNow: true
    })
  }
  blur = () => {
    this.setState({
      isNow: false
    })
  }
  /**
   * @description: 点击发送像父组件进行传递 输入框里面的值
   * @param {type} 
   * @author: mapleLeaves
   * @Date: 2019-05-30 09:17:43
   */
  submit = () => {
    this.props.changeClick({
      user: 1,
      text: this.state.value,
      name: '张三',
      type: 'text',
      time: new Date()
    })
    this.setState({
      value: ''
    })
  }
  changeVal = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  keyUp = (e) => {
    if (e.keyCode === 13) {
      if (e.shiftKey && e.keyCode === 13) {
        this.setState({
          value: e.target.value + '\n'
        })
        return;
      }
      this.submit(e)
    }
  }
  render() {
    return (
      <div className='imputAll' style={{
        background: this.state.isNow ? 'white' : '#F5F5F5'
      }}>
        <dir className='header'>

        </dir>
        <textarea rows={3} onFocus={this.focus} onBlur={this.blur} style={{
          background: this.state.isNow ? 'white' : '#F5F5F5'
        }} value={this.state.value} onChange={e => this.changeVal(e)} onKeyUp={e => this.keyUp(e)} />
        <div style={{
          textAlign: "right",
          background: this.state.isNow ? 'white' : '#F5F5F5'
        }}>
          <Button type="default" onClick={this.submit}>
            发送(S)
        </Button>
        </div>
      </div>
    )
  }
}

export default Index
