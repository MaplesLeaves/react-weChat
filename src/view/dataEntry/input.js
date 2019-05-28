// 输入框
import React, { Component } from 'react'
import { Input, Button } from 'antd';
const { TextArea } = Input;
export class input extends Component {
  static propTypes = {

  }
  change = (res) => {
    this.setState({
      val: res.target.value
    })
  }
  click = () => {
    console.error(this.state)
  }
  state = {
    val: "123456"
  }
  render() {
    return (
      <div>
        <Input placeholder="Basic usage" value={this.state.val} onChange={e=> this.change(e)} />
        <Input size="large" placeholder="large size" />
        <Input placeholder="default size" />
        <Input size="small" placeholder="small size" />
        <Button type="default" onClick={this.click}>点我获取数据 （这个tmd是个坑）</Button>
        <TextArea placeholder="Autosize height based on content lines" autosize />
        <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
      </div>
    )
  }
}

export default input

