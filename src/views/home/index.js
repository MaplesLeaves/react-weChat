import React, { Component } from 'react'


class Home extends Component {
    divClick = () => {
        console.log(this)
        this.props.history.push('user')
    }
    render() {
        return (
            <div>
                首页
            </div>
        )
    }
}

export default Home
