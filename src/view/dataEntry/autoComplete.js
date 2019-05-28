// 自动完成
import React, { Component } from 'react'
import { AutoComplete } from 'antd';

export class autoComplete extends Component {
  state = {
    dataSource: [],
  }
  onSelect = (value) => {
    console.log('onSelect', value);
  }
  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }
  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
        />
      </div>
    )
  }
}

export default autoComplete
