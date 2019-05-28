import React, { Component } from 'react'
import { Badge, Icon } from 'antd';

export class badge extends Component {
  render() {
    return (
      <div>
        <Badge count={5}>
          <a href="#" >
            dhasjkf</a>
        </Badge>
        <br />
        <Badge count={6}>
          <a href="#" />
        </Badge>
        <br />
        <Badge count={25} />
        <br />
        <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
        <br />
        <Badge count={109} style={{ backgroundColor: '#52c41a' }} />
        <br />
        <Badge dot>
          <Icon type="notification" />
        </Badge>
        <br />
        <Badge count={0} dot>
          <Icon type="notification" />
        </Badge>
        <br />
        <Badge dot>
          <a href="#">Link something</a>
        </Badge>
      </div>
    )
  }
}

export default badge
