import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init,subscribeChat} from '../providers/SocketProvider'
import { useEffect } from 'react'

function Container() {
  useEffect(()=>{
    init()
    subscribeChat()
  },[])
  return (
    <div>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container