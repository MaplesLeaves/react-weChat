import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Andy',
            age:31,
            msg:"来自子类的消息"
        }
        this.props.callback(this.state);
    }

    change=()=>{
        this.state.age++;
        this.props.callback(this.state);
    }

    render(){
        return(
            <div>
              <h2>子组件：</h2>
                <div>
                  信息来源: {this.props.info.msg}
                  <br/>
                  姓名:{this.props.info.name}
                  <br/>
                  年龄{this.props.info.age}
                  <hr/>
                </div>
                <button onClick={this.change}>点击给父组件传值</button>
            </div>
        )
    }
}

export default Child;