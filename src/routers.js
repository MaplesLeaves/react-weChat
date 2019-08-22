/*
 * @Description: 
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2019-05-28 17:02:15
 * @LastEditors: mapleleaves
 * @LastEditTime: 2019-05-28 17:02:15
 * @weChat: 893774884
 */
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Index from './views/Index/Index'
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
    component: Index,
    routes: [
      {
        path: '/chatList',
        component: ChatList
      },
      {
        path: '/talkMessage',
        component: TalkMessage,

      },
      {
        path: '/collect',
        component: Collect
      }
    ]
  }
]
const BasicRoute = () => (
<<<<<<< HEAD
  <BrowserRouter>
    <Switch>
    <Route path='/login' component={Login} />
      <Index>
        <Switch>
          <Route path='/chatList' component={ChatList} />
          <Route path='/talkMessage' component={TalkMessage} />
          <Route path='/collect' component={Collect} />
        </Switch>
      </Index>
    </Switch>
=======
  <BrowserRouter >
    {renderRoutes(routes)}
>>>>>>> 04f9ca22a89fefaaedf974d6ea2b95f5b9f4792f
  </BrowserRouter>
)

export default BasicRoute
