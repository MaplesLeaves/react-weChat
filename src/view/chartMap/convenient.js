import React, { Component } from 'react'
import Editor from 'wangeditor';
export class convenient extends Component {
  componentDidMount() {
    var editor = new Editor('#all');// 绑定标签  实例化对象
    editor.customConfig = { // 配置参数 设置数据回调 
      onchange: (val) => {
        console.error(val)
      },
      uploadImgShowBase64 :true, // 展示上传图片btn 
      uploadImgServer : '/upload', // 设置上传图片回调
      uploadImgMaxSize: 3 * 1024 * 1024, // 设置上传图片格式大小 
      uploadImgMaxLength: 5, // 设置上传图片张数
      uploadFileName: 'lastName', // 设置上传图片的fileName
      uploadImgHeaders:{ // 设置上传图片的headers
        'Accept': 'text/x-json'
      },
      uploadImgTimeout: 2000, // 设置上传图片的超时时间 为2秒 
      customAlert: (data)=>{
        alert('大鑫的提示' + data);
      }
    }
    editor.create(); // 创建 富文本编辑器 
    editor.txt.html('<p>要初始化的内容</p>');
    // editor.txt.clear() // 清空编辑器里面的内容 
  }
  render() {
    return (
      <div>
        <h2>富文本编辑器</h2>
        <div id='all' style={{ 'height': '50px' }}></div>

      </div>
    )
  }
}

export default convenient
