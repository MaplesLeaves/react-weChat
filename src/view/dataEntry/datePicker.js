// 日期选择框
import React, { Component } from 'react'
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export class datePicker extends Component {
  onChange = res => {
    console.error(res)
  }
  render() {
    return (
      <div>
        <DatePicker onChange={this.onChange} />
        <br />
        <MonthPicker onChange={this.onChange} placeholder="Select month" />
        <br />
        <RangePicker onChange={this.onChange} />
        <br />
        <WeekPicker onChange={this.onChange} placeholder="Select week" />
      </div>
    )
  }
}

export default datePicker

