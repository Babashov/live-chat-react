import styles from './styles.module.css'
import {useChat} from '../context/ChatContext'
import ChatItem from './ChatItem'

function ChatList() {
  const {messages} = useChat()
  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((item,index)=><ChatItem key={index} item={item} />)}
      </div>
    </div>
  )
}

export default ChatList