import React, { Component } from 'react'
import { Collapse,Icon } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
}
export class collapse extends Component {
  callback = (key) => {
    console.error(key);
  }
  render() {
    return (
      <div>
        <Collapse defaultActiveKey={['1']} onChange={this.callback}>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" disabled>
            <p>{text}</p>
          </Panel>
        </Collapse>
        <br />
        <Collapse accordion>
          <Panel header="This is panel header 1" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <br />
        <Collapse onChange={this.callback}>
          <Panel header="This is panel header 1" key="1">
            <Collapse defaultActiveKey="1.1">
              <Panel header="This is panel nest panel" key="1.1.1">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="This is panel header 2" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3">
            <p>{text}</p>
          </Panel>
        </Collapse>
        <br />
        {/* 隐藏标签  showArrow */}
        <Collapse defaultActiveKey={['1']} onChange={this.callback}>
          <Panel header="This is panel header with arrow icon" key="1">
            <p>{text}</p>
          </Panel>
          <Panel showArrow={false} header="This is panel header with no arrow icon" key="2">
            <p>{text}</p>
          </Panel>
        </Collapse>

        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
        >
          <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
          <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}

export default collapse
