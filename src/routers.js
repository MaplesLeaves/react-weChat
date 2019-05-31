import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Index from './views/Index/Index'
import ChatList from './views/chatList/Index'
import TalkMessage from './views/talkMessage/Index'
import Collect from './views/Collect/Index'

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Index>
        <Switch>
          <Route path='/chatList' component={ChatList} />
          <Route path='/talkMessage' component={TalkMessage} />
          <Route path='/collect' component={Collect} />
        </Switch>
      </Index>
    </Switch>
  </BrowserRouter>
)
export default BasicRoute
