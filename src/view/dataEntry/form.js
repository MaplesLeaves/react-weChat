import React, { Component } from 'react'

import {
  Form, Icon, Input, Button,Checkbox
} from 'antd';

/**
 * 注:
 *    (1)、表单为独立模式开发组件 创建完成后需要进行creat 保证表单表单的作用域没有污染
 *   （2）、一个组件内部最好只存在一个表单元素 避免 多个表单之间产生的内置方法进行互通
 */

export class form extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
   hasErrors=(fieldsError)=> {
    return Object.keys(fieldsError).some(field => fieldsError[field]); // 遍历判断是否存在值
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleReset = () => { // 清除红色警告
    this.props.form.resetFields();
  }
  handleSubmitAll = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // console.error('fhadjks', err,values)
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={this.hasErrors(getFieldsError())}
          >
            Log in
          </Button>
          <Button type="default" onClick = {this.handleReset}>清除</Button>
          
        </Form.Item>
      </Form>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          
          Or <a href="">register now!</a>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

export default Form.create()(form)
// 需要重新创建一个react  form表单 
