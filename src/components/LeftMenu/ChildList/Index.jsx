import React, { Component } from 'react'
import './index.less'
import { Link } from 'react-router-dom';

export class Index extends Component {
  static propTypes = {

  }
  componentDidMount(){
  }
  handClilck = ()=>{
    this.props.callBack(this.props.message.key)
  }
  render() {
    return (
      
      <li className='iconlist' style={{backgroundColor: this.props.message.key === this.props.index ? 'red' : 'yellow'}} onClick={this.handClilck}>
          {
            this.props.message.path ? <Link to={this.props.message.path}>{this.props.message.icon}</Link> : this.props.message.icon
          }
      </li>
      
    )
  }
}

export default Index
