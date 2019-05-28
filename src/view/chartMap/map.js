import React, { Component } from 'react'
import { Map } from 'react-amap';
export class map extends Component {
  render() {
    const plugins = [
      'MapType',
      'Scale',
      'OverView',
      'ControlBar', // v1.1.0 新增
      {
        name: 'ToolBar',
        options: {
          visible: true,  // 不设置该属性默认就是 true
          onCreated(ins){
            console.error(ins);
          },
        },
      }
    ]
    return (
      <div>
          <h2>地图</h2>
          <div style={{width: '100%', height: '400px'}}>
      <Map amapkey={'788e08def03f95c670944fe2c78fa76f'}  plugins={plugins}/>
    </div>
      </div>
    )
  }
}

export default map
