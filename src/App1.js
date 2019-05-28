import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd';
import './App.css';
import {connect} from 'react-redux'
export class App1 extends Component {
  static propTypes = {

  } 
  componentDidMount(){
    console.error(this.props)
  }
  clickHandel(event){
    console.error(this)
    console.error(event)
  }
  render() {
    const {  addAge, deleteAge } = this.props;
    return (
      <div>
        <h2>{this.props.state}</h2>
          <Button type="primary" onClick={addAge}> 加年龄</Button>
          <Button type="primary" onClick={this.clickHandel.bind(this)}> shishi</Button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
                  <Button type="danger" onClick={deleteAge}> 减年龄</Button>
      </div>
    )
  }
}

function mapStateToProps(state) { // 定义返回数据  即该组件页面进行展示的数据
  return {
    state: state.list
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) { // 操作功能  action  提前定义好 为后续业务操作进行触发 
  return {
    addAge: () => dispatch({ type: 'add' }),
    deleteAge: () => dispatch({ type: 'delete' })
  }
}

//连接组件

export default connect( mapStateToProps, mapDispatchToProps)(App1);;
