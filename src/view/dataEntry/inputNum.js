// 数字输入框
import React, { Component } from 'react'
import { InputNumber } from 'antd'
export class inputNum extends Component {
  state = {
    disabled: true
  }
  onChange = res => {
    console.error(res)
  }
  render() {
    return (
      <div>

        <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
        <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <InputNumber min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={this.onChange} />
        <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={this.onChange} disabled={this.state.disabled} />
        <InputNumber
          defaultValue={1000}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={this.onChange}
        />
        <InputNumber
          defaultValue={100}
          min={0}
          max={100}
          formatter={value => `${value}%`}
          parser={value => value.replace('%', '')}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default inputNum


