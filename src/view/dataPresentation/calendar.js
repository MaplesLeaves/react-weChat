import React, { Component } from 'react'
import { Calendar,Alert } from 'antd';
import moment from 'moment';
export class calendar extends Component {
  static propTypes = {

  }
  onPanelChange = (value, mode) => {
    console.error(value, mode);
    this.setState({ value });
  }
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  }

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  }
  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>
        <Calendar onPanelChange={this.onPanelChange} />
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
        </div>
        <div>
        <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
        <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </div>
      </div>
    )
  }
}

export default calendar
