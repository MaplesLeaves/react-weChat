import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd'
import './index.less'
import Particles from 'react-particles-js';
import {login} from 'api/Http';
import {connect} from 'react-redux'
class Login extends React.Component {
  /**
   * @description: 点击登录  或  回车进行表单验证  并提交 数据进行验证
   * @param {type} 
   * @return: 
   * @author: mapleLeaves
   * @Date: 2019-06-20 10:56:34
   */
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        login(values).then((res) => {
          if (res.code === 200) {
            message.success(res.msg);
            this.props.addUser(res.data);
            setTimeout(()=> {
              this.props.history.push('/talkMessage');
            }, 1000)
          }
        }).catch((err) => {
        });
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='login'>
        <Particles  className='boxname'
        canvasClassName='canvas'
        params={{
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: ["grab"]
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
          },
          particles: {
            color:{
              value: 'random'
            },
            size:{
              value	: 5
            },
            number: {
              value: 100
            },
            move:{
              attract:{
                enable:true
              },
              speed: 10
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "white",
                blur: 20,
              }
            }
          }
        }}
        />
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
function mapDispatchToProps (dispatch) {
  return {
    addUser: (data) => dispatch({ type: 'ADDUSER', data })
  }
}
export default connect('', mapDispatchToProps)(Form.create()(Login));
