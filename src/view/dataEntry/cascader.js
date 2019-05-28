// 级联选择
import React, { Component } from 'react'
import { Cascader } from 'antd';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
const optionsDis = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      disabled: true,
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];
export class cascader extends Component {
  onChange = res => {
    console.error(res);
  }
  render() {
    return (
      <div>
        <Cascader options={options} onChange={this.onChange} placeholder="Please select" />
        <Cascader options={optionsDis} onChange={this.onChange} placeholder="Please select" />
        <Cascader options={optionsDis} onChange={this.onChange} placeholder="Please select" changeOnSelect />
      </div>
    )
  }
}

export default cascader

