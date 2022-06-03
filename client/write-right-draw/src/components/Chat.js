import React from 'react'
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001")

function Chat() {

  const sendMessage = () => {
    socket.emit("send_message", {message: "Hello"})
  }

  return (
    <div>
      <input placeholder='Message...'/>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default Chat
