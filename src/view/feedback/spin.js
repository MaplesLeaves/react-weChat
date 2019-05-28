import React, { Component } from 'react'
import { Spin ,Alert} from 'antd';

export class spin extends Component {
  render() {
    return (
      <div>
   
        <Spin size="small" />
        <br />
        <Spin />
        <br />
        <Spin size="large" />
        <Spin spinning={true}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
       
      </div>
    )
  }
}

export default spin
