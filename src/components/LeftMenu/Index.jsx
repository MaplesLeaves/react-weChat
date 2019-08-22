/*
 * @Description: 左侧操作栏列表  进行数据展示操作按钮  后期可进行后台数据进行管理控制
 * @Version: 2.0
 * @Autor: maoleLeaves
 * @Date: 2019-05-29 09:07:10
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-06-25 11:39:57
 * @weChat: 893774884
 */
import React, { Component } from 'react'
import ChildList from './ChildList/Index'
import './index.less'
export class Index extends Component {
  componentDidMount() {
  }
  callBack = (data) => {
    this.props.callBack(data)
  }
  render() {
    return (
      <ul className='iconBox'>
        {
          this.props.data.map((item) => {
            return <ChildList message={item} key={item.key} index={this.props.index} callBack={this.callBack} />
          })
        }

      </ul>
    )
  }
}

export default Index
