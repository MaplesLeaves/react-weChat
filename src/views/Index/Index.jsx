import React, { Component } from 'react'
import { Layout } from 'antd';
import LeftMenu from 'components/LeftMenu/Index'
const { Content, Sider } = Layout;
export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false,
      listMenu: [
        {
          icon: '头像',
          path: '',
          key: 1
        },
        {
          icon: '聊天',
          path: '/talkMessage',
          key: 2
        },
        {
          icon: '好友',
          path: '/chatList',
          key: 3
        },
        {
          icon: '收藏',
          path: '/collect',
          key: 4
        }
      ],
      nowIndex: 1
    }
  }
  componentDidMount() {
    this.setState({
      initDone: true
    })
  }
  callBack = (data) =>{
    this.setState({
      nowIndex: data
    })
  }
  render() {
    return (
      <div>
        <Layout style={{ height: '100%' }}>
          <Sider width={60}>
            <LeftMenu index={this.state.nowIndex} data={this.state.listMenu} callBack={this.callBack}/>
          </Sider>
          <Content style={{
            background:"#F5F5F5"
          }}>
            {
              this.state.initDone ?
                this.props.children :
                <div>
                  加载中
                </div>
            }
          </Content>
        </Layout>
      </div>
    )
  }
}
export default Index
