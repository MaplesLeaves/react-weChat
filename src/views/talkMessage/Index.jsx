import React, { Component } from 'react'
import InputField from 'components/InputField/Index.jsx'
import MessageList from 'components/MessageList/Index'
import { Layout } from 'antd';
import UserList from 'components/UserList/Index'
const { Content, Header, Footer, Sider } = Layout;
export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageInfo: {}
    }
  }
  componentDidMount() {
  }
  changeClick = (data) => {
    this.setState({
      messageInfo: data
    })
  }
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider width={250} style={{
          background: '#EAE7E6'
        }}>
          <UserList />
        </Sider>
        <Content >
          <Layout style={{ height: '100%' }}>
            <Header style={{
              borderBottom: '1px solid #dedede',
              background: '#F5F5F5'
            }}
            >header</Header>
            <Layout style={{ height: '100%' }}>
              <Content style={{ height: '100%' }}> <MessageList ref='all' messageInfo={this.state.messageInfo} /></Content>
            </Layout>
            <Footer style={{
              padding: 0
            }}><InputField changeClick={this.changeClick} /></Footer>
          </Layout>
        </Content>
      </Layout>
    )
  }
}
export default Index
