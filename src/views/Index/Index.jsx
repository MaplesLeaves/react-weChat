import React, { Component } from 'react'
import { Layout } from 'antd';
import LeftMenu from 'components/LeftMenu/Index'
<<<<<<< HEAD
import { getAllInfo } from 'api/Http';
import { connect } from 'react-redux';
import Socket from 'api/socket';
=======
import { renderRoutes, matchRoutes } from 'react-router-config'
>>>>>>> 04f9ca22a89fefaaedf974d6ea2b95f5b9f4792f
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
    // const {addInfo}  = this.props
  }
  componentDidMount() {
    this.setState({
      initDone: true
    })
    /**
     * @description:  查询接口  获取所有用户信息  并生成  用户对话列表  根据用户的微信账号进行生成key值  value  为 空数组  方便后面进行添加数据
     * @param {type} 
     * @return: 
     * @author: mapleLeaves
     * @Date: 2019-06-25 10:42:51
     */
    getAllInfo().then((res) => {
      if (res.code === 200) {
        this.props.addInfo(res.data);
        let obj = {};
        for (let index = 0; index < res.data.length; index++) {
          obj[res.data[index].weChatNum] = [];
        }
        this.props.talkAll(obj);
        this.props.newMessage(res.data[0]);
      }
    })
    /**
     * @description: 链接socket  进行数据库表链接
     * @param {type} 
     * @return: 
     * @author: mapleLeaves
     * @Date: 2019-06-25 10:44:46
     */
    this.socket = new Socket({
      // socketUrl: `ws://192.168.0.103:9536?chatNum=${this.props.userInfo.weChatNum}`,
      socketUrl: 'ws://192.168.0.103:9536?chatNum=mapleleaves_1',
      timeout: 5000,
      socketMessage: (receive) => {
        this.props.addtalk(JSON.parse(receive.data));
        setTimeout(()=>{
          this.props.getMessage();
        },1000)
      },
      socketClose: (msg) => {
        console.log(msg);
      },
      socketError: () => {
        console.log(this.state.taskStage + '连接建立失败');
      },
      socketOpen: () => {
        console.log('连接建立成功');
        // 心跳机制 定时向后端发数据
        this.taskRemindInterval = setInterval(() => {
          this.socket.sendMessage({ "msgType": 0 })
        }, 30000)
      }
    })
    try {
      this.socket.connection();
    } catch (e) {
    }
    this.props.sendSocket(this.socket.sendMessage)
  }
  callBack = (data) => {
    this.setState({
      nowIndex: data
    })
  }
  render() {
    return (
      <div>
        <Layout style={{ height: '100%' }}>
          <Sider width={60}>
            <LeftMenu index={this.state.nowIndex} data={this.state.listMenu} callBack={this.callBack} />
          </Sider>
          <Content socket={this.socket} style={{
            background: "#F5F5F5"
          }}>
            {
              this.state.initDone ?

							renderRoutes(this.props.route.routes) :
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
//需要触发什么行为
function mapDispatchToProps(dispatch) { // 操作功能 
  return {
    addInfo: (data) => dispatch({ type: 'ADDALLINFO', data }),
    sendSocket: (data) => dispatch({
      type: 'CREATE',
      data
    }),
    talkAll: (data) => dispatch({ type: 'TALKTYPE', data }),
    newMessage: (data) => dispatch({ type: 'NOWMESSAGE', data }),
    addtalk: (data) => dispatch({ type: 'ADDUSERTALK', data }),
    getMessage: (data)=>dispatch({type: 'GETFN',data})
  }
}
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    talkInfo: state.talkAll
  }
}
//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Index);;

