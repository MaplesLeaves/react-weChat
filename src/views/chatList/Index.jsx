import React, { Component } from 'react'
import { Layout } from 'antd';
import UserList from 'components/UserList/Index'
import UserInfo from 'components/UserInfo/Index'
import {connect} from 'react-redux'
const {Content  , Sider} = Layout
export class Index extends Component {
  constructor(props){
    super(props);
    this.state = {
      nowMessage: {}
    }
  }
  componentDidMount () {

  }
  nowClick = data=> {
    this.setState({
      nowMessage: data
    })
  }
  render() {
    return (
    <Layout style={{height: '100%'}}>
      <Sider width={250} style={{
          background: '#EAE7E6'
        }}>
          <UserList data={this.props.state} nowClick= {this.nowClick}/>
        </Sider>
      <Layout>
        <Content>
            <UserInfo message = {this.state.nowMessage.id ? this.state.nowMessage : this.props.state[0]}/>
        </Content>
      </Layout>
    </Layout>
    )
  }
}
function mapStateToProps(state){
  return {
    state: state.allList
  }
}
export default connect( mapStateToProps, '')(Index);;