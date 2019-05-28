import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from '../index/index'
import Home from '../views/home'
import User from '../views/user'
import Table from '../table'
/*
const Inbox = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <Route path={`${match.url}/messages/:id`} component={Message}/>
    </div>
)
 */
class Routers extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/table" component={Table} />
					<BrowserRouter>
						<Index>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/User" component={User} />
							</Switch>
						</Index>
					</BrowserRouter>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Routers
