import React, { Component } from 'react'
import { Menu, Layout } from 'antd'
import './index.less'
import 'antd/dist/antd.css'
// import Routers from '../routers/index'
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu
const { Header, Footer, Sider, Content } = Layout
class Index extends Component {
	state = {
		openKeys: ['1'],
	}
	menuList = [
		{
			name: '系统管理',
			id: 1,
			children: [
				{
					name: '首页',
					to: '/',
					id: 11,
				},
				{
					name: '用户',
					to: '/user',
					id: 12,
				},
				{
					name: '公司',
					id: 13,
				},
			],
		},
  ]
	onOpenChange = openKeys => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1)
		if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys })
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			})
		}
	}
	subMenuClick = res => {
		if (res.key === '11') {
			console.log(this)
		}
		if (res.key === '12') {
		}
	}
	render() {
		return (
			<div>
				<Layout>
					<Sider>
						<Menu
							className="navLeft"
							mode="inline"
							openKeys={this.state.openKeys}
							onOpenChange={this.onOpenChange}
							style={{ width: '100%' }}
							onSelect={this.subMenuClick}
						>
							{this.menuList.map((time, index) => {
								return (
									<SubMenu key={time.id} title={time.name}>
										{time.children.map((res, index) => {
											return (
												<Menu.Item key={res.id}>
													<Link to={`${res.to}`}>{res.name}</Link>
												</Menu.Item>
											)
										})}
									</SubMenu>
								)
							})}
						</Menu>
					</Sider>
					<Layout>
						<Header style={{ color: '#ffffff' }}>头部标签</Header>
						<Content>{this.props.children}</Content>
						<Footer>底部</Footer>
					</Layout>
				</Layout>
			</div>
		)
	}
}

export default Index
