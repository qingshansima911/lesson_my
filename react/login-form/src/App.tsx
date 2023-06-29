import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css'
import { LoginContainer } from './pages/login/LoginContainer';
import { PageB } from './pages/pageB/PageB';

function App() {
  // react 一切皆是组件 
  return (
    // 路由配置 hash路由 开关 一个路由对应一个组件 exact={true}精确匹配
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={LoginContainer} />
        <Route path="/pageB" component={PageB} />
      </Switch>
    </HashRouter>
  )
}

export default App
