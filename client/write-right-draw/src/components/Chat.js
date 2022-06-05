import React from 'react'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

const socket = io.connect("http://localhost:3001")

function Chat() {

  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');
  const [room, setRoom] = useState('')


  const joinRoom = () => {
      if (room !== '') {
        console.log({room});
        socket.emit("join_room", room)
      }
  }

  const sendMessage = () => {
    socket.emit("send_message", {message, room})
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message)
    })
  }, [socket])


  return (
    <div>
      <input placeholder='Room...'
      onChange={(event) => {
        setRoom(event.target.value)
      }}
      />
      <button onClick={joinRoom}>Join Room</button>
      <input placeholder='Message...'
      onChange={(event) => {
        setMessage(event.target.value)
      }}/>
      <button onClick={sendMessage}>Send Message</button>
      <h2>Message:
        {messageReceived}
      </h2>
    </div>
  )
}

export default Chat
