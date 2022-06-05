import React from 'react'
import io from 'socket.io-client'
import { useEffect } from 'react'

const socket = io.connect("http://localhost:3001")

function Chat() {

  const sendMessage = () => {
    socket.emit("send_message", {message: "Hello"})
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message)
    })
  }, [socket])


  return (
    <div>
      <input placeholder='Message...'/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default Chat
