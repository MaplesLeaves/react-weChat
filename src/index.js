/*
 * @Description: React 初始页面  进行react redux antd router 等进行引入
                注入redux实例化  创建初始的state进行存储  
 * @Version: 2.0
 * @Autor: maoleLeaves
 * @Date: 2019-05-09 18:47:14
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-05-28 11:00:51
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
  list: 123,
  tiger: 1000
}
function list(state, action) {
  if (typeof state === 'undefined') return ''
  switch (action.type) {
    case 'add':
      return state += 100;
    case 'delete':
      return state -= 100;
    default:
      return state
  }
}
function tiger(state, action) {
  if (typeof state === 'undefined') return ''
  switch (action.type) {
    case '涨工资':
      return state += 100;
    case '扣工资':
      return state -= 100;
    default:
      return state
  }
}
//这是reducer
const reducer = {
  tiger,
  list
}

//创建store
const store = createStore(combineReducers(reducer), message,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//进行store的数据监听 
store.subscribe(() => {
  console.error(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
