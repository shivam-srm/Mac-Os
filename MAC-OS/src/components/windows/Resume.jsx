import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({windowName, windowState, setwindowState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
        <div className="resume-window">
            <iframe src="/resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
)
}

export default Resume
