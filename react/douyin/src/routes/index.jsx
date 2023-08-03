// Navigate 从/ 跳转到 /home
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/home'
// import PlaceOrder from '../pages/place-order'
// lazy 懒加载 Suspense 异步加载
import React, { lazy, Suspense } from 'react';

const PlaceOrder = lazy(() => import('@/pages/place-order'))

// 路由配置分离
// 返回函数组件 jsx = js + html
// 路由懒加载
export default function RoutesConfig() {
  return (
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/buy' element={<PlaceOrder />} />
    // </Routes>
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace={true} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/buy' element={<PlaceOrder />} />
      </Routes>
    </Suspense>
  )
}