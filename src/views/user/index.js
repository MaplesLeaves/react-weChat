import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from 'react-router-dom';

const aaa = () => (
    <div>
        当前是aaa
    </div>
)
const bbb = () => (
    <div>
        当前是bbb
    </div>
)
class Ccc extends Component {
    render() {
        console.log(this)
        return (
            <div>
                我的
                <Link to='/user/'>aaa</Link>
                <Link to='/user/bbb'>bbb</Link>
                {this.props.children}
            </div>
        )
    }
}
class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Ccc>
                    <Switch>
                        <Route exact path={this.props.location.pathname} component={aaa} />
                        <Route path={`${this.props.location.pathname}bbb`} component={bbb} />
                    </Switch>
                </Ccc>
            </BrowserRouter>
        )
    }
}

export default Home
