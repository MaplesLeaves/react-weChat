// 选择器
import React, { Component } from 'react'
import { Select } from 'antd';

const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.error(`selected ${value}`);
}
export class select extends Component {
  handleChange = e => {
    console.error(e)
  }
  render() {
    return (
      <div>
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" >Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} disabled>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} loading={false}>
          <Option value="lucy" loading>Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} size='large' loading={false}>
          <Option value="lucy" loading>Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} size='default' loading={false}>
          <Option value="lucy" loading>Lucy</Option>
        </Select>
        <Select defaultValue="lucy" style={{ width: 120 }} size='small' loading={false}>
          <Option value="lucy" loading>Lucy</Option>
        </Select>
        <Select
        allowClear
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
        >
          {children}
        </Select>
      </div>
    )
  }
}

export default select

