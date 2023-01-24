import styles from './styles.module.css'
import {useState} from 'react'
import { sendMessage } from '../providers/SocketProvider'

function ChatForm() {
  const [message,setMessage] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(message);
    sendMessage(message)

    setMessage('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          className={styles.textInput} 
          value={message} 
          onChange={(e)=>setMessage(e.target.value)} 
        />
      </form>
    </div>
  )
}

export default ChatForm