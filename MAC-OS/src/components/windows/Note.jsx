import React , {  useEffect , useState }from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import './note.scss'

const Note = ({windowName, windowState, setwindowState}) => {

    const [markdown, setmarkdown] = useState("")

    useEffect(() => {
        fetch("/note.txt")
        .then(res => res.text())
        .then(text => setmarkdown(text))
    },[])
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowState={setwindowState}>
      <div className="note-window">
        {markdown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}</SyntaxHighlighter> : <p>Loading...</p>}
      </div>
    </MacWindow>
  )
}

export default Note
