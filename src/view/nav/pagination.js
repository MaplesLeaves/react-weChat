// 分页
import React, { Component } from 'react'
import { Pagination } from 'antd';


class pagination extends Component {
  onShowSizeChange = (current, pageSize)=>{
    console.error(current, pageSize)
  }
  render() {
    return (
      <div>
        <Pagination defaultCurrent={1} total={5000} />
        <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} />
        <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        <Pagination
      total={85}
      showTotal={total => `共 ${total} 条`}
      pageSize={20}
      defaultCurrent={1}
    />
      </div>
    )
  }
}

export default pagination
