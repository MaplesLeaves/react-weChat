import React, { Component } from 'react'
import { Layout } from 'antd';
import UserList from 'components/UserList/Index'
import UserInfo from 'components/UserInfo/Index'
const {Content  , Sider} = Layout
export class Index extends Component {
  render() {
    return (
    <Layout style={{height: '100%'}}>
      <Sider width={250} style={{
          background: '#EAE7E6'
        }}>
          <UserList />
        </Sider>
      <Layout>
        <Content>
            <UserInfo/>
        </Content>
      </Layout>
    </Layout>
    )
  }
}

export default Index
