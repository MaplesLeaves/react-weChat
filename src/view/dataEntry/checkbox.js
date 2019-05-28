// 多选框
import React, { Component } from 'react'
import { Checkbox, Row, Col } from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
  
];
const defaultCheckedList = ['Apple', 'Orange'];

export class checkbox extends Component {
  onChange = val => {
    console.error(val)
  }
  change = res => {
    console.error(res.target.checked)
  }
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
  };

  onChangeItem = (checkedList) => {
    console.error(checkedList)
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }
  render() {
    return (
      <div>
        <Checkbox onChange={this.change}></Checkbox>
        <br />
        <Checkbox defaultChecked={false} disabled />
        <br />
        <Checkbox defaultChecked disabled />
        <br />
        <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange} />
        <br /><br />
        <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange} />
        <br /><br />
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} onChange={this.onChange} />
        <Row>
          <Col span={8}><Checkbox value="A">A</Checkbox></Col>
          <Col span={8}><Checkbox value="B">B</Checkbox></Col>
          <Col span={8}><Checkbox value="C">C</Checkbox></Col>
          <Col span={8}><Checkbox value="D">D</Checkbox></Col>
          <Col span={8}><Checkbox value="E">E</Checkbox></Col>
        </Row>

        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </Checkbox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChangeItem} />
      </div>
    )
  }
}
export default checkbox
