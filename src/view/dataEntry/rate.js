// 评分
import React, { Component } from 'react'
import { Rate, Icon } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export class rate extends Component {

  state = {
    value: 3,
  }
  handleChange = (value) => { // 更换下标来进行数值替换 
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <Rate defaultValue={2} />
        {/* 半星设置 */}
        <Rate allowHalf defaultValue={2} />
        {/* 添加disable  进行不可更改 */}
        <Rate disabled defaultValue={2} />
        {/* 设置charcter 属性  添加icon  进行更换展示图案 */}
        <Rate character={<Icon type="heart" />} allowHalf />
        {/* 添加文字进行展示 并设置字体大小 */}
        <Rate character="A" allowHalf style={{ fontSize: 36 }} />
        {/*  */}
        <Rate character='今天是个好日子' allowHalf style={{ fontSize: 36 }} />
        {/* tooltips添加value选中更改值  */}
        <Rate tooltips={desc} onChange={this.handleChange} value={value} />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        <Rate defaultValue={3} allowClear={true} /> allowClear: true
        <Rate defaultValue={3} allowClear={false} /> allowClear: false
      </div>
    )
  }
}

export default rate

