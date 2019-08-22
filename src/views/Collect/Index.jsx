/*
 * @Description:  收藏页面路由组件
 * @Version: 2.0
 * @Autor: maoleLeaves
 * @Date: 2019-05-30 17:58:48
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-06-30 15:59:56
 * @weChat: 893774884
 */
import React, { Component } from 'react'
import CollectList from 'components/Collect/CollectList'
import CollectMenu from 'components/Collect/CollectMenu'
import { Layout } from 'antd';
const { Header, Content, Sider} = Layout
export class Index extends Component {
  render() {
    return (
      <Layout style={{
        height: '100%'
      }}>
        <Sider width={250} style={{
          height: '100%',
          background: '#EAE7E6'
        }}>
          <CollectMenu/>
        </Sider>
        <Layout>
        <Header style={{
          background: 'rgb(245, 245, 245)'
        }}>全部收藏</Header>
          <Content>
            <CollectList/>
          </Content>
        </Layout>
      </Layout>

    )
  }
}

export default Index
