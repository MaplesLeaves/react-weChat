import React, { Component } from 'react'
import { Alert } from 'antd';

export class alert extends Component {
  render() {
    return (
      <div>
        <Alert message="Success Text" type="success" />
        <Alert message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert message="Error Text" type="error" />
        <Alert
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
          closable

        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description Error Description Error Description"
          type="error"
          closable

        />
        <Alert
          message="Success Text"
          description="Success Description Success Description Success Description"
          type="success"
        />
        <Alert
          message="Info Text"
          description="Info Description Info Description Info Description Info Description"
          type="info"
        />
        <Alert
          message="Warning Text"
          description="Warning Description Warning Description Warning Description Warning Description"
          type="warning"
        />
        <Alert
          message="Error Text"
          description="Error Description Error Description Error Description Error Description"
          type="error"
        />
        <Alert message="Success Tips" type="success" showIcon />
        <Alert message="Informational Notes" type="info" showIcon />
        <Alert message="Warning" type="warning" showIcon />
        <Alert message="Error" type="error" showIcon />
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
          closable
        />
         <Alert message="Warning text" banner />
    <br />
    <Alert message="Very long warning text warning text text text text text text text" banner closable />
    <br />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <br />
    <Alert type="error" message="Error text" banner />
  
      </div>
    )
  }
}

export default alert
