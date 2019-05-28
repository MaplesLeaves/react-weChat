import React from 'react'
// import { Divider } from 'antd';
import { Layout, Menu, Icon, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'
import userInfo from './../images/userInfo1.jpg'
const SubMenu = Menu.SubMenu
const { Header, Sider, Content, Footer } = Layout
let listMenu = [
  {
    name: '个人中心',
    id: '1',
    path: '/index/userInfo',
  },
  {
    name: '系统管理',
    id: '2',
    path: '/index/page',
  },
  {
    name: '人员管理',
    id: '3',
    path: '/index/detail',
  },
  {
    next: true,
    name: '通用',
    id: '4',
    children: [
      {
        name: 'button',
        id: '4.1',
        path: '/index/button',
      },
      {
        name: 'icon',
        id: '4.2',
        path: '/index/icon',
      },
      {
        name: 'typography',
        id: '4.3',
        path: '/index/typography',
      }
    ]
  },
  {
    next: true,
    name: '布局',
    id: '5',
    children: [
      {
        name: 'gtid',
        id: '5.1',
        path: '/index/gtid',
      },
      {
        name: 'layout',
        id: '5.2',
        path: '/index/layout',
      }
    ]
  },
  {
    next: true,
    name: '导航',
    id: '6',
    children: [
      {
        name: 'breadcrumb',
        id: '6.1',
        path: '/index/breadcrumb',
      },
      {
        name: 'deopdown',
        id: '6.2',
        path: '/index/deopdown',
      },
      {
        name: 'menu',
        id: '6.3',
        path: '/index/menuAll',
      },
      {
        name: 'pageHeader',
        id: '6.4',
        path: '/index/pageHeader',
      },
      {
        name: 'pagination',
        id: '6.5',
        path: '/index/pagination',
      },
      {
        name: 'steps',
        id: '6.6',
        path: '/index/steps',
      }
    ]
  },
  {
    next: true,
    name: '提交表单',
    id: '7',
    children: [
      {
        name: 'InputNumber',
        id: '7.1',
        path: '/index/InputNumber',
      },
      {
        name: 'autoComplete',
        id: '7.2',
        path: '/index/autoComplete',
      },
      {
        name: 'cascader',
        id: '7.3',
        path: '/index/cascader',
      },
      {
        name: 'checkbox',
        id: '7.4',
        path: '/index/checkbox',
      },
      {
        name: 'datePicker',
        id: '7.5',
        path: '/index/datePicker',
      },
      {
        name: 'form',
        id: '7.6',
        path: '/index/form',
      },
      {
        name: 'input',
        id: '7.7',
        path: '/index/input',
      },
      {
        name: 'mention',
        id: '7.8',
        path: '/index/mention',
      },
      {
        name: 'radio',
        id: '7.9',
        path: '/index/radio',
      },
      {
        name: 'rate',
        id: '7.10',
        path: '/index/rate',
      },
      {
        name: 'select',
        id: '7.11',
        path: '/index/select',
      },
      {
        name: 'slider',
        id: '7.12',
        path: '/index/slider',
      },
      {
        name: 'switchInfo',
        id: '7.13',
        path: '/index/switchInfo',
      },
      {
        name: 'timePicker',
        id: '7.14',
        path: '/index/timePicker',
      },
      {
        name: 'transfer',
        id: '7.15',
        path: '/index/transfer',
      },
      {
        name: 'treeSelect',
        id: '7.16',
        path: '/index/treeSelect',
      },
      {
        name: 'upload',
        id: '7.17',
        path: '/index/upload',
      }
    ]
  },
  {
    next: true,
    name: '数据展示',
    id: '8',
    children: [
      {
        name: 'avatar',
        id: '8.1',
        path: '/index/avatar',
      },
      {
        name: 'badge',
        id: '8.2',
        path: '/index/badge',
      },
      {
        name: 'calendar',
        id: '8.3',
        path: '/index/calendar',
      },
      {
        name: 'card',
        id: '8.4',
        path: '/index/card',
      },
      {
        name: 'carousel',
        id: '8.5',
        path: '/index/carousel',
      },
      {
        name: 'collapse',
        id: '8.6',
        path: '/index/collapse',
      },
      {
        name: 'comment',
        id: '8.7',
        path: '/index/comment',
      },
      {
        name: 'empty',
        id: '8.8',
        path: '/index/empty',
      },
      {
        name: 'list',
        id: '8.9',
        path: '/index/list',
      },
      {
        name: 'popover',
        id: '8.10',
        path: '/index/popover',
      },
      {
        name: 'statistic',
        id: '8.11',
        path: '/index/statistic',
      },
      {
        name: 'table',
        id: '8.12',
        path: '/index/table',
      },
      {
        name: 'tabs',
        id: '8.13',
        path: '/index/tabs',
      },
      {
        name: 'tag',
        id: '8.14',
        path: '/index/tag',
      },
      {
        name: 'timeline',
        id: '8.15',
        path: '/index/timeline',
      },
      {
        name: 'tooltip',
        id: '8.16',
        path: '/index/tooltip',
      },
      {
        name: 'tree',
        id: '8.17',
        path: '/index/tree',
      }
    ]
  },
  {
    next: true,
    name: '反馈',
    id: '9',
    children: [
      {
        name: 'alert',
        id: '9.1',
        path: 'alert',
      },
      {
        name: 'drawer',
        id: '9.2',
        path: '/index/drawerInfo',
      },
      {
        name: 'message',
        id: '9.3',
        path: '/index/message',
      },
      {
        name: 'model',
        id: '9.4',
        path: 'model',
      },
      {
        name: 'notification',
        id: '9.5',
        path: '/index/notification',
      },
      {
        name: 'popcpnfirm',
        id: '9.6',
        path: '/index/popcpnfirm',
      },
      {
        name: 'progress',
        id: '9.7',
        path: '/index/progress',
      },
      {
        name: 'skeleton',
        id: '9.8',
        path: '/index/skeleton',
      },
      {
        name: 'spin',
        id: '9.9',
        path: '/index/spin',
      }
    ]
  },
  {
    next: true,
    name: '其他',
    id: '10',
    children: [
      {
        name: 'anchor',
        id: '10.1',
        path: '/index/anchor',
      },
      {
        name: 'backTop',
        id: '10.2',
        path: '/index/backTop',
      },
      {
        name: 'configProvider',
        id: '10.3',
        path: '/index/configProvider',
      },
      {
        name: 'divider',
        id: '10.4',
        path: '/index/divider',
      },
      {
        name: 'localeProvider',
        id: '10.5',
        path: '/index/localeProvider',
      }
    ]
  },
  {
    next: true,
    name: '图表及地图',
    id: '11',
    children: [
      {
        name: 'highCharts(图表 highcharts)',
        id: '11.1',
        path: '/index/highCharts',
      },
      {
        name: 'convenient(富文本编辑器)',
        id: '11.2',
        path: '/index/convenient',
      },
      {
        name: 'map(地图)',
        id: '11.3',
        path: '/index/map',
      },
      {
        name: '父子组件通讯',
        id: '11.4',
        path: '/index/childMap',
      }
    ]
  }
]
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a>退出</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a >个人中心</a>
    </Menu.Item>
  </Menu>
)
export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ height: '100%' }} >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', overflowY: 'scroll' }} className='sliderBar'>
            {listMenu.map(item => {
              // 根据三目运算进行查看是否存在二级菜单  进行列表循环展示
              return item.next ?

                <SubMenu key={item.id}
                  title={
                    <span className="nav-text"><Icon type="user" />{item.name}</span>}>
                  {
                    item.children.map(key => {
                      return <Menu.Item key={key.id}>

                        <Link to={key.path}>
                          <Icon type="user" />
                          <span className="nav-text">{key.name}</span>
                        </Link>
                      </Menu.Item>
                    })
                  }
                </SubMenu>
                :
                <Menu.Item key={item.id} path={item.path}>
                  <Icon type="user" />
                  <span>{item.name}</span>
                  <Link to={`${item.path}`}></Link>
                </Menu.Item>

            })}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '001529', padding: 0, color: 'white' }}>
            <div className='userInfoMessage'>
              <Icon
                className="trigger"

                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <div>
                <img src={userInfo} style={{ width: '40px', height: '40px', borderRadius: '10px', marginRight: '10px' }} />
                <Dropdown overlay={menu} trigger={['click']}>
                  <span>
                    mapleLeaves <Icon type="down" />
                  </span>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
              height: '100%',
              overflowY: 'scroll'
            }}
            className='contentAll'
          >
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}
