// "use strict";
import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import {connect} from 'react-redux'
class App extends Component {
  constructor(props) {
    super(props);
    console.error(props)
  }
  componentDidMount() {
  }
  render() {
    const { PayIncrease, PayDecrease, addAge, deleteAge } = this.props;
    return (
      <div className="App">
        做的是分模块化switch 组件拆分
              <div className="App">
          <h2>当月工资为{this.props.state.tiger}</h2>
          <Button type="primary" onClick={PayIncrease}> 加工资</Button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
                  <Button type="danger" onClick={PayDecrease}> 减工资</Button>
          <br />
          <br />
          <br />
            <h2>{this.props.state.list}</h2>
          <Button type="primary" onClick={addAge}> 加年龄</Button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
                  <Button type="danger" onClick={deleteAge}> 减年龄</Button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) { // 状态数据
  return {
    state: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) { // 操作功能 
  return {
    PayIncrease: () => dispatch({ type: '涨工资' }),
    PayDecrease: () => dispatch({ type: '扣工资' }),
    addAge: () => dispatch({ type: 'add' }),
    deleteAge: () => dispatch({ type: 'delete' })
  }
}

//连接组件

export default connect( mapStateToProps, mapDispatchToProps)(App);;
