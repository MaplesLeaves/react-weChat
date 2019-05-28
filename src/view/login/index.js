import React from 'react'
// import { Divider } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './index.less'
// let img = require('@/userInfo1.jpg');

class NormalLoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
        this.props.history.push('/index/page');
				console.error('Received values of form: ', values)
			}
		})
	}
	render() {
		const { getFieldDecorator } = this.props.form
		return (
			<div className='login'>
        {/* <img src={require('@/userInfo1.jpg')} alt="" /> */}
				<Form onSubmit={this.handleSubmit} className="login-form" style={{ width: '400px' }}>
					<Form.Item>
						{getFieldDecorator('userName', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Password"
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true,
						})(<Checkbox>Remember me</Checkbox>)}
							Forgot password
						Or register now!
						<div style={{ textAlign: 'center' }}>
							<Button type="primary" htmlType="submit" className="login-form-button" >
								登陆
							</Button>
						</div>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

export default Form.create()(NormalLoginForm)
