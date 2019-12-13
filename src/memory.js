import React from 'react'
import ReactDOM from 'react-dom'
import Memory from "./components/memory/memory.js"

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(<Memory />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()