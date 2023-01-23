import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init} from '../providers/SocketProvider'
import { useEffect } from 'react'

function Container() {
  useEffect(()=>{
    init()
  },[])
  return (
    <div>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container