import React, { Component } from 'react'
import { notification, Button, Select } from 'antd'
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const { Option } = Select;
export class notificationInfo extends Component {
  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  openNotificationInfo = () => {
    const args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0.5,
    };
    notification.open(args);
  }
  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }
  openNotificationType = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }
    render() {
      return (
        <div>
          <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
          <Button type="primary" onClick={this.openNotificationInfo}>Open the notification box</Button>
          <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
          <br />
          <Select
            defaultValue="topRight"
            style={{ width: 120, marginRight: 10 }}
            onChange={(val) => {
              notification.config({
                placement: val,
              });
            }}
          >
            {options.map(val => <Option key={val} value={val}>{val}</Option>)}
          </Select>
          <Button
            type="primary"
            onClick={this.openNotificationType}
          >
            Open the notification box
    </Button>
        </div>
      )
    }
  }

  export default notificationInfo
