// 滑动输入条
import React, { Component } from 'react'
import { Slider, Switch ,InputNumber,Col} from 'antd';

export class slider extends Component {
  state={
    disabled: false,
    inputValue: 50
  }
  handleDisabledChange= e=>{
    this.setState({
      disabled: e
    })
  }
  onChange = e=>{
    this.setState({
      inputValue: e,
    });
  }
  render() {
    const {inputValue} = this.state
    return (
      <div>
        <Slider defaultValue={30} tooltipVisible />
         <Slider defaultValue={30} disabled={this.state.disabled} />
        <Slider range defaultValue={[20, 50]} disabled={this.state.disabled} />
        Disabled: <Switch size="small" checked={this.state.disabled} onChange={this.handleDisabledChange} />
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </div>
    )
  }
}

export default slider

