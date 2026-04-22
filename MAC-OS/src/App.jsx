
import { useState } from 'react'
import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'


const App = () => {
const [windowState, setwindowState] = useState({
  github:false,
  note:false,
  resume:false,
  spotify:false,
  cli:false
})


  return (
    <main>
      <Nav />
      <Dock windowState={windowState} setwindowState={setwindowState} />
      {windowState.github && <Github windowName="github" windowState={windowState} setwindowState={setwindowState}/>}
      {windowState.note && <Note windowName="note" windowState={windowState} setwindowState={setwindowState}/>}
      {windowState.resume && <Resume windowName="resume" windowState={windowState} setwindowState={setwindowState}/>}
      {windowState.spotify && <Spotify windowName="spotify" windowState={windowState} setwindowState={setwindowState}/>}
      {windowState.cli && <Cli windowName="cli" windowState={windowState} setwindowState={setwindowState}/>}
      
    </main>
  )
}

export default App
