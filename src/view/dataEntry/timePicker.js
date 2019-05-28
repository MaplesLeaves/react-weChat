// 时间选择框
import React, { Component } from 'react'
import { TimePicker } from 'antd';
import moment from 'moment';
export class timePicker extends Component {
  state = {
    value: null,
  };

  onChange = (time) => {
    console.error(time);
    this.setState({ value: time });
  }
  render() {
    return (
      <div>
        <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
        <TimePicker value={this.state.value} onChange={this.onChange} />
      </div>
    )
  }
}

export default timePicker
