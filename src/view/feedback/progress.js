import React, { Component } from 'react'
import { Progress, Button, Tooltip } from 'antd';
const ButtonGroup = Button.Group
export class progress extends Component {
  state = {
    percent: 0,
  }

  increase = () => {
    let percent = this.state.percent + 1;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }

  decline = () => {
    let percent = this.state.percent - 1;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }
  render() {
    return (
      <div>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={180} />
        <Progress percent={50} showInfo={false} />
        <Progress type="circle" percent={30} width={80} />
        <Progress type="circle" percent={70} width={80} status="exception" />
        <Progress type="circle" percent={100} width={80} />
        <br />
        <Progress type="circle" percent={this.state.percent} />
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>

        <br />
        <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
        <Progress type="circle" percent={100} format={() => 'Done'} />
        <br />
        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} />
        </Tooltip>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} type="circle" />
        </Tooltip>

        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} type="dashboard" />
        </Tooltip>

        <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={99.9}
        />
        <Progress
          strokeColor={{
            from: '#108ee9',
            to: '#87d068',
          }}
          percent={99.9}
          status="active"
        />
      </div>
    )
  }
}

export default progress
