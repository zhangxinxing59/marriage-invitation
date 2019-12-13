import React, { useState } from 'react';
import './memory.less';

function Memory() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div onClick={clickHandle}>跳转</div>
      <div onClick={clickToStepsHandle}>跳转</div>
    </div>
  )
}

function clickHandle() {
  if ("undefined" != typeof wx && wx.getSystemInfoSync) {
    wx.navigateTo({
      url: '../log/index?id=1'
    })
  } else {
    location.href = 'log.html'
  }
}
function clickToStepsHandle() {
  if ("undefined" != typeof wx && wx.getSystemInfoSync) {
    wx.navigateTo({
      url: '../steps/index?id=1'
    })
  } else {
    location.href = 'steps.html'
  }
}

export default Memory
