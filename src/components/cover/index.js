import React, { useState } from 'react'
import './index.less'

function Cover() {
  // const [count, setCount] = useState(0)

  return (
    <div className="cover-warpper">
      <p className="cover-warpper_title">Marry Me</p>
      <div className="cover-warpper_banner">
        <img className="cover-warpper_banner_bg" src="http://m.qpic.cn/psc?/93f06fc2-8865-4526-94c2-8fc9f41a31de/JFx.huugQnT.ko1ZRraxaSwtWFcaTkUV8vjekwmxkoRaOyx9t*DA2FiKco33Yt6gPm7ZUu0jEyamlPWYUTnP499wfGcPgrjkLjbPh0lJe08!/b&bo=QAYqBAAAAAARB1g!&rf=viewer_4" alt=""/>
      </div>
      {/* <button onClick={() => setCount(count - 1)}>-</button> */}
      {/* <span>{count}</span> */}
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      {/* <div onClick={clickHandle}>跳转</div> */}
      <div className="cover-warpper_footer" onClick={clickToMemoryHandle}>
        <div className="cover-warpper_footer_btn">进入婚礼</div>
      </div>
    </div>
  )
}
function clickToMemoryHandle() {
  if ("undefined" != typeof wx && wx.getSystemInfoSync) {
    wx.navigateTo({
      url: '../memory/index?id=1'
    })
  } else {
    location.href = 'memory.html'
  }
}

export default Cover
