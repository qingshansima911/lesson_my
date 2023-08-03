// react + reactDOM
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// 全局样式
import './index.css'
// reset
import './assets/styles/reset.css'
// 自定义字体
import 'font-awesome/css/font-awesome.min.css'
// iconfont
import './assets/iconfont/iconfont.css'
// 路由
import { BrowserRouter } from 'react-router-dom'

// 组件化
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
