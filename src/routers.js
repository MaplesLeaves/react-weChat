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
  <BrowserRouter >
    {renderRoutes(routes)}
  </BrowserRouter>
)

export default BasicRoute
