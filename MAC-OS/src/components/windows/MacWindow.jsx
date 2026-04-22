import React from 'react'
import { Rnd } from 'react-rnd'
import './macwindow.scss'

const MacWindow = ({children,width="40vw",height="40vw" , windowName, windowState, setwindowState}) => {
  return (
   <Rnd  default={{
    width : width,
    height:height,
    x:300,
    y:200
   }}>
    <div className="window">
      <div className="nav">
        <div className="dots"
         onClick={() => { setwindowState(state => ({...state, [windowName]:false})) }}
        >
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
        </div>

            <div className="title"><p>shivamrai - zsh</p></div>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
    </Rnd>
  )
}

export default MacWindow
