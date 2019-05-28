// button 页面
import React from 'react'
import { Button ,Icon} from 'antd';
const ButtonGroup = Button.Group;
export default class button extends React.Component{
  state = {
    loading: false,
    iconLoading: false,
  }
  render(){
    return(
      <div>
        <Button type="default">正常标签（default）</Button>
        <Button type="primary">蓝色标签（primary）</Button>
        <Button type="dashed">蓝边标签（dashed）</Button>
        <Button type="danger">红色错误标签（danger）</Button>
        <Button type="primary" shape='circle' icon='search'></Button>
        <Button type="primary" icon='search' >查找按钮（加icon）</Button>
        <Button type="primary" loading>查找不到</Button>
        <ButtonGroup>
            <Button><Icon type="left" />向左</Button>
            <Button type="primary"><Icon type="right" />向右</Button>
        </ButtonGroup>
        <br/>
        <br/>
        <Button type="primary" block>哥们我是最长的你有什么意见么 </Button>
        <Button type="default" size='large'>大</Button>
        <Button type="default" >中</Button>
        <Button type="default" size='small'>小</Button>
      </div>
    )
  }
}
