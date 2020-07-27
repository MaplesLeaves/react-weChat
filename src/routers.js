/*
 * @Description: 
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2019-05-28 17:02:15
 * @LastEditors: mapleleaves
 * @LastEditTime: 2020-07-25 23:05:19
 * @weChat: 893774884
 */
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Index from './views/Index/Index'
import Login from './views/Login/Index'
import ChatList from './views/chatList/Index'
import TalkMessage from './views/talkMessage/Index'
import Collect from './views/Collect/Index'
import { renderRoutes } from 'react-router-config'
// const BasicRoute = () => (
//   <BrowserRouter>
//     <Switch>
//       <Index>
//         <Switch>
//           <Route path='/chatList' component={ChatList} />
//           <Route path='/talkMessage' component={TalkMessage} />
//           <Route path='/collect' component={Collect} />
//         </Switch>
//       </Index>
//     </Switch>
//   </BrowserRouter>
// )
const routes = [
  {
    path:'/index',
    component: Index,
    exart: true,
    routes: [
      {
        path: '/index/chatList',
        component: ChatList,
      },
      {
        path: '/index/talkMessage',
        component: TalkMessage,
      },
      {
        path: '/index/collect',
        component: Collect,
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]
const BasicRoute = () => (
  <BrowserRouter >
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default BasicRoute
