import React from 'react'
import ReactDOM from 'react-dom'
import Cover from './components/cover'
import "./components/reset.less";

export default function createApp() {
  // rem 和页面样式修改
  window.onload = function() {
    if (process.env.isMiniprogram) {
      // 小程序
      document.documentElement.style.fontSize = wx.getSystemInfoSync().screenWidth / 30 + 'px'
    } else {
        // Web 端
        document.documentElement.style.fontSize = document.documentElement.getBoundingClientRect().width / 30 + 'px'
    }
  }
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)
  console.log(2222)
  ReactDOM.render(<Cover />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
