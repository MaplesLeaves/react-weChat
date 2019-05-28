import React, { Component } from 'react'
import Child from './Child'
export class childMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chileInfo: {},
      infoMesage: {
        age: 12,
        name: '张三（孩子）',
        msg: '来自父组件的数据'
      }
    }
  }
  callback = (chileInfo) => {
    // setState方法,修改msg的值,值是由child里面传过来的
    this.setState({chileInfo});
  }
  change = () => {
    this.state.infoMesage.age ++ ;
    this.setState({
      infoMesage: this.state.infoMesage
    })
  }
  componentWillUpdate = () =>{
    console.error(this.state)
  }
  componentDidUpdate = ()=>{
    console.error(this.state)
  }
  render() {
    return (
      <div>
        <h2>父子组件通讯</h2>
        <div>
          信息: {this.state.chileInfo.msg}
          <br/>
          姓名: {this.state.chileInfo.name}
          <br/>

          年龄: {this.state.chileInfo.age}
          
        </div>
        <button onClick={this.change}>点击添加子组件年龄大小</button>
        <hr/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Child callback={this.callback} age={this.state.age}  info={this.state.infoMesage}></Child>

      </div>
    )
  }
}

export default childMap
