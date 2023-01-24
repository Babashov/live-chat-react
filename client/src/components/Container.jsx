import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init,subscribeChat,initialMessages} from '../providers/SocketProvider'
import { useEffect } from 'react'
import { useChat } from '../context/ChatContext'

function Container() {
  const {setMessages} = useChat()
  useEffect(()=>{
    init()
    subscribeChat((message)=>{
      setMessages((prevState)=>[...prevState,{message}])
    })
    initialMessages((messages)=>setMessages(messages))
  },[])
  return (
    <div>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container