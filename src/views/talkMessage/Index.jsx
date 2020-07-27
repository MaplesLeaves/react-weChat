import React, { Component } from 'react'
import InputField from 'components/InputField/Index.jsx'
import MessageList from 'components/MessageList/Index'
import { Layout } from 'antd';
import UserList from 'components/UserList/Index'
import { connect } from 'react-redux'
// import Item from 'antd/lib/list/Item';
const { Content, Header, Footer, Sider } = Layout;
export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  /**
   * @description: 回调  进行props传值 由木偶组件传递过来的数据信息  进行socket链接  分发到相对应的人员当中
   * @param {type} 
   * @return: 
   * @author: mapleLeaves
   * @Date: 2019-06-25 16:52:25
   */
  changeClick = (data) => {
    // console.error(this.props.userInfo.weChatNum !== this.props.nowMessage.weChatNum);
    if (this.props.userInfo.weChatNum === this.props.nowMessage.weChatNum) {
      const obj = Object.assign({}, data, { otherNum: this.props.nowMessage.weChatNum, user: 0 });
      this.props.submitMessage(obj);
    } else {
      this.props.addTalk(Object.assign(data, { otherNum: this.props.nowMessage.weChatNum }));
      this.getMessage();
    } 
  }
  componentWillReceiveProps = (nextProps) => {
    console.error(nextProps)
   }
  componentDidMount() {
    this.props.addFn(this.getMessage);
  }
  getMessage = () => {
    this.setState({
      data: this.props.talkAll[this.props.nowMessage.weChatNum]
    })
  }
  /**
   * @description: 回调  添加当前聊天人员数据存储 
   * @param {type} 
   * @return: 
   * @author: mapleLeaves
   * @Date: 2019-06-25 16:55:44
   */
  callBack = (data) => {
    this.props.newMessage(data);
  }
  clickon = () => {
    console.error(this.props)
  }
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider width={250} style={{
          background: '#EAE7E6'
        }}>
          <UserList data={this.props.state} nowClick={this.callBack} />
        </Sider>
        <Content >
          <Layout style={{ height: '100%' }}>
            <Header style={{
              borderBottom: '1px solid #dedede',
              background: '#F5F5F5'
            }}
            >{this.props.nowMessage ? this.props.nowMessage.userName : ''}</Header>
            <Layout style={{ height: '100%' }}>
              <Content style={{ height: '100%' }}>
                <MessageList ref='all' messageInfo={this.state.data} />
              </Content>
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
function mapStateToProps(state) {
  return {
    state: state.allList,
    nowMessage: state.nowMessage,
    userInfo: state.userInfo,
    talkAll: state.talkAll
  }
}
function mapDispatchToProps(dispatch) {
  return {
    submitMessage: (data) => dispatch({ type: 'SEND', data }),
    newMessage: (data) => dispatch({ type: 'NOWMESSAGE', data }),
    addTalk: (data) => dispatch({ type: 'ADDUSERTALK', data }),
    addFn: (data)=>dispatch({type: 'ADDFN', data})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);;
