// 页头
import React, { Component } from 'react'
import { PageHeader, Typography } from 'antd';
const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];
class pageHeader extends Component {
  render() {
    return (
      <div>
        <PageHeader
          title="Title"
          breadcrumb={{ routes }}
        />,
      </div>
    )
  }
}
export default pageHeader
