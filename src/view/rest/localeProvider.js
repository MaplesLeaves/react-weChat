import React, { Component } from 'react'
import {
  LocaleProvider, DatePicker, Radio,
} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn';
const RadioGroup = Radio.Group;

const App = () => (
  <div>

  </div>
);
export class localeProvider extends Component {
  onChange = () => {

  }
  state = {
    key: zhCN,
    list: [zhCN, en_US]
  }
  render() {
    return (
      <div>
        <LocaleProvider locale={this.state.key}>
          {/* <RadioGroup onChange={this.onChange} value={this.state.list[0]}>
            <Radio value={this.state.list[0]}>中文</Radio>
            <Radio value={this.state.list[1]}>英文</Radio>
          </RadioGroup> */}
          <DatePicker />
        </LocaleProvider>
      </div>
    )
  }
}

export default localeProvider
