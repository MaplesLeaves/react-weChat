/*
 * @Description: React 初始页面  进行react redux antd router 等进行引入
                注入redux实例化  创建初始的state进行存储  
 * @Version: 2.0
 * @Autor: maoleLeaves
 * @Date: 2019-05-09 18:47:14
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-06-30 14:13:11
 * @weChat: 893774884
 */

import './index.less';
import 'antd/dist/antd.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './routers';

const message = {
  userInfo:{},
  allList: [],
  talkAll: [],
  socket: {
    sendMessage: null
  },
  nowMessage: {

  },
  getMessage: {
    Fn: null
  }
}
function nowMessage (state,action){
  if (typeof state === 'undefined') return ''
  switch (action.type) {
    case 'NOWMESSAGE':
      return state  = action.data;
      default:
      return state
  }
}
function socket (state, action) {
  if (typeof state === 'undefined') return ''
  switch (action.type) {
    case 'CREATE':
        state.sendMessage = action.data      
      return state
    case 'SEND':
        state.sendMessage(action.data);
        return state
    default:
      return state
  }
}
function userInfo(state, action) {
  if (typeof state === 'undefined') return ''
  switch (action.type) {
    case 'ADDUSER':
      return state = action.data;
    default:
      return state
  }
}
function allList(state, action) {
  if (typeof state === 'undefined') return ''
  switch (action.type) {
    case 'ADDALLINFO':
      return state = action.data;
    default:
      return state
  }
}
function talkAll(state, action){
  if (typeof state === 'undefined') return ''
  switch (action.type) {
    case 'TALKTYPE': // 设置聊天数据的人员对象  以人员的key 进行表示  此处业务在接口处已经进行处理过了 
      let talk = Object.assign(state,action.data);
      return talk;
    case 'ADDUSERTALK': // 添加当前对方发送过来的消息
      for (const key in state) {
        if (key === action.data.otherNum) {
            state[key].push(action.data)
        }
      }
      return state;
    case 'ADDTALKALL':
      return state;
    default:
      return state
  }
} 
function getMessage (state,action) {
  if (typeof state === 'undefined') return ''
  switch (action.type) {
    case 'ADDFN': // 添加获取方法后台传递过来的方法
      state.Fn = action.data;
      return state;
    case 'GETFN': //执行方法 进行获取后台传递过来的数据
      state.Fn();
      return state;
    default:
      return state
  }
} 
//这是reducer
const reducer = {
  userInfo,
  allList,
  talkAll,
  socket,
  nowMessage,
  getMessage
}

//创建store
const store = createStore(combineReducers(reducer), message,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//进行store的数据监听 
store.subscribe(() => {
  // console.error(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
