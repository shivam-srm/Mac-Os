// Cli.jsx
import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './cli.scss'

// -------- FORMATTER --------
const section = (title, content) => `
──────── ${title} ────────
${content}
`

// -------- COMMANDS --------
const commands = {
  help: {
    description: 'Show all commands',
    fn: () => `
about       → Profile summary
education   → Academic background
skills      → Technical + tools
projects    → All projects
drone       → Drone deep dive
portfolio   → 3D portfolio
experience  → Work & achievements
contact     → Contact info
`
  },

  about: {
    description: 'Profile summary',
    fn: () => section('ABOUT', `
MCA student | MERN Developer
Focused on backend + web systems
`)
  },

  education: {
    description: 'Academic background',
    fn: () => section('EDUCATION', `
MCA – SRM Institute
BCA – SRMCEM
CBSE – XII & X
`)
  },

  skills: {
    description: 'Technical skills',
    fn: () => section('SKILLS', `
Java, C, Python
MERN Stack
SQL, Git, DSA
`)
  },

  projects: {
    description: 'Projects',
    fn: () => section('PROJECTS', `
Freestyle Drone
3D Portfolio
Bloemed Website
`)
  },

  drone: {
    description: 'Drone system',
    fn: () => section('DRONE', `
Pixhawk + ArduPilot
GPS navigation + RTL
Failsafe + telemetry
`)
  },

  portfolio: {
    description: '3D portfolio',
    fn: () => section('PORTFOLIO', `
Next.js + Three.js
95+ performance
Optimized rendering
`)
  },

  experience: {
    description: 'Experience',
    fn: () => section('EXPERIENCE', `
Drone workshops
G20 representation
QA Internship
`)
  },

  contact: {
    description: 'Contact',
    fn: () => section('CONTACT', `
shivamrai83170@gmail.com
+91 8317068532
`)
  }
}

// -------- INTRO --------
const intro = `
╭────────────────────────────────────╮
│   SHIVAM RAI CLI PORTFOLIO v2      │
╰────────────────────────────────────╯

System Loaded Successfully...
Type "help" to explore commands
`

// -------- COMPONENT --------
const Cli = ({windowName, windowState, setwindowState}) => {
  return (
    <MacWindow width="28vw" title="Terminal" windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          noDefaults={true}
          welcomeMessage={intro}
          promptLabel="shivam@system-$"
          promptLabelStyle={{ color: '#00ff9c' }}
          inputColor="#00ff9c"
          outputColor="#e6ffe6"
          commandColor="#00ff9c"
          noCommandFound={(cmd) => `zsh: command not found: ${cmd}`}
          style={{ background: '#000', color: '#00ff9c' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli