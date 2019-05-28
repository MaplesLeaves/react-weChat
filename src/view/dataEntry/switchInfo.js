// 开关
import React, { Component } from 'react'
import { Switch, Icon } from 'antd';

export class switchInfo extends Component {
  onChange = e => {
    console.error(e);
  }
  render() {
    return (
      <div>
        <Switch defaultChecked onChange={this.onChange} />
        <br />
        <Switch defaultChecked />
        <br />
        <Switch size="small" defaultChecked />
        {/* 添加文字进行展示开关 */}
        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
        <br />
        {/* 添加数字展示开关 */}
        <Switch checkedChildren="1" unCheckedChildren="0" />
        <br />
        {/* 添加icon进行展示开关 */}
        <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} defaultChecked />

      </div>
    )
  }
}

export default switchInfo

