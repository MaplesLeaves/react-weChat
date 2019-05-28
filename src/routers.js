import React from 'react'
import { HashRouter, Route, Switch , BrowserRouter} from 'react-router-dom'
import Home from './view/home/home'
import Detail from './view/detail/detail'
import Index from './view/index'
import Page from './view/page/page'
import Login from './view/login/index'
import UserInfo from './view/userInfo/index'
import App from './App'
import App1 from './App1'
import {
  button,
  icon,
  typography
} from './view/common'

import {
  gtid,
  layout
} from './view/layout'
import {
  breadcrumb,
  deopdown,
  menuAll,
  pageHeader,
  pagination,
  steps
} from './view/nav/index'
import {
  inputNumber,
  autoComplete,
  cascader,
  checkbox,
  datePicker,
  form,
  input,
  mention,
  radio,
  rate,
  select,
  slider,
  switchInfo,
  timePicker,
  transfer,
  treeSelect,
  upload
} from './view/dataEntry'
import {
  avatar,
  badge,
  calendar,
  card,
  carousel,
  collapse,
  comment,
  empty,
  list,
  popover,
  statistic,
  table,
  tabs,
  tag,
  timeline,
  tooltip,
  tree
} from './view/dataPresentation'
import {
  alert,
  drawerInfo,
  message,
  model,
  notification,
  popcpnfirm,
  progress,
  skeleton,
  spin
} from './view/feedback'
import {
  anchor,
  backTop,
  configProvider,
  divider,
  localeProvider
} from './view/rest'
import {
  convenient,
  highCharts,
  map,
  childMap
} from './view/chartMap'
const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Login} />
      <Route exact path="/app" component={App} />
      <Route exact path="/app1" component={App1} />
      <Index>
        <Switch>
          <Route path="/index/userInfo" component={UserInfo} />
          <Route path="/index/page" component={Page} />
          <Route path="/index/detail" component={Detail} />
          <Route path="/index/button" component={button} />
          <Route path="/index/icon" component={icon} />
          <Route path="/index/typography" component={typography} />
          <Route path="/index/gtid" component={gtid} />
          <Route path="/index/layout" component={layout} />
          <Route path="/index/breadcrumb" component={breadcrumb} />
          <Route path="/index/deopdown" component={deopdown} />
          <Route path="/index/menuAll" component={menuAll} />
          <Route path="/index/pageHeader" component={pageHeader} />
          <Route path="/index/pagination" component={pagination} />
          <Route path="/index/steps" component={steps} />

          <Route path="/index/InputNumber" component={inputNumber} />
          <Route path="/index/autoComplete" component={autoComplete} />
          <Route path="/index/cascader" component={cascader} />
          <Route path="/index/checkbox" component={checkbox} />
          <Route path="/index/datePicker" component={datePicker} />
          <Route path="/index/form" component={form} />
          <Route path="/index/input" component={input} />
          <Route path="/index/mention" component={mention} />
          <Route path="/index/radio" component={radio} />
          <Route path="/index/rate" component={rate} />
          <Route path="/index/select" component={select} />
          <Route path="/index/slider" component={slider} />
          <Route path="/index/switchInfo" component={switchInfo} />
          <Route path="/index/timePicker" component={timePicker} />
          <Route path="/index/transfer" component={transfer} />
          <Route path="/index/treeSelect" component={treeSelect} />
          <Route path="/index/upload" component={upload} />

          <Route path="/index/avatar" component={avatar} />
          <Route path="/index/badge" component={badge} />
          <Route path="/index/calendar" component={calendar} />
          <Route path="/index/card" component={card} />
          <Route path="/index/carousel" component={carousel} />
          <Route path="/index/collapse" component={collapse} />
          <Route path="/index/comment" component={comment} />
          <Route path="/index/empty" component={empty} />
          <Route path="/index/list" component={list} />
          <Route path="/index/popover" component={popover} />
          <Route path="/index/statistic" component={statistic} />
          <Route path="/index/table" component={table} />
          <Route path="/index/tabs" component={tabs} />
          <Route path="/index/tag" component={tag} />
          <Route path="/index/timeline" component={timeline} />
          <Route path="/index/tooltip" component={tooltip} />
          <Route path="/index/tree" component={tree} />

          <Route path="/index/alert" component={alert} />
          <Route path="/index/drawerInfo" component={drawerInfo} />
          <Route path="/index/message" component={message} />
          <Route path="/index/model" component={model} />
          <Route path="/index/notification" component={notification} />
          <Route path="/index/popcpnfirm" component={popcpnfirm} />
          <Route path="/index/progress" component={progress} />
          <Route path="/index/skeleton" component={skeleton} />
          <Route path="/index/spin" component={spin} />

          <Route path="/index/anchor" component={anchor} />
          <Route path="/index/backTop" component={backTop} />
          <Route path="/index/configProvider" component={configProvider} />
          <Route path="/index/divider" component={divider} />
          <Route path="/index/localeProvider" component={localeProvider} />

          <Route path="/index/convenient" component={convenient} />
          <Route path="/index/highCharts" component={highCharts} />
          <Route path="/index/map" component={map} />
          <Route path="/index/childMap" component={childMap} />
        </Switch>
      </Index>
    </Switch>
  </BrowserRouter>
)
export default BasicRoute
