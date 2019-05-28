// 单选框
import React, { Component } from 'react'
import { Radio,Input } from 'antd';
const RadioGroup = Radio.Group;
const RadioButton  = Radio.Button
export class radio extends Component {
  changeGroup= e=>{
    this.setState({
      value: e.target.value
    })
  }
  state = {
    value: 1
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        <Radio>fdas</Radio>        
        <Radio disabled></Radio>
        <RadioGroup onChange={this.changeGroup} value={this.state.value}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
        </RadioGroup>
        <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1}>Option A</Radio>
        <Radio style={radioStyle} value={2}>Option B</Radio>
        <Radio style={radioStyle} value={3}>Option C</Radio>
        <Radio style={radioStyle} value={4}>
          More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </RadioGroup>
      <RadioGroup onChange={this.onChange} value={this.state.value}>
        <RadioButton  value={1}>Option A</RadioButton>
        <RadioButton  value={2}>Option B</RadioButton>
        <RadioButton  value={3}>Option C</RadioButton>
        <RadioButton  value={4}>
          More...
          {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </RadioButton>
      </RadioGroup>

      </div>
    )
  }
}

export default radio

