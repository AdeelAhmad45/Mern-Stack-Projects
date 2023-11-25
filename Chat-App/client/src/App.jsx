import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css'

const socket = io('http://localhost:5000')
function App() {
  const [username, setUsername] = useState("")
  const [chatActive, setChatActive] = useState(false)
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")

  useEffect(() => {
    socket.on("received-message", (message) => {
      setMessages([...messages, message])
    })
    console.log(messages);
  }, [messages, socket])
  

  const handleSubmit = (e) => {
    e.preventDefault()

    const messageData = {
      message: newMessage,
      user: username,
      time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
    }
   

    !newMessage == "" 
    ? socket.emit("send-message", messageData) // for sending messages
    : alert("Message cannot be empty")
    
    setNewMessage("")
  }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        {
          chatActive ? (<div className='rounded-md w-full md:w-[80vh] lg:[40vh] text-xl mx-auto  '>
            <h1 className='text-center font-bold  my-2 uppercase'>Addy Chat App</h1>
            <div>
              <div className='overflow-scroll p-2 h-[80vh] lg:h-[60vh]'>
                {
                  messages.map((message, index) => {
                    return(
                      <div key={index} className={`flex rounded-md shadow-md my-2 w-fit ${username === message.user && "ml-auto" }`}>
                        <div className='bg-blue-400 flex justify-center items-center rounded-md'>
                          <h3 className='font-bold text-lg px-2'>{message.user.charAt(0).toUpperCase()}</h3>
                        </div>
                        <div className='px-2 bg-white rounded-md '>
                          <span className='text-sm '>{message.user}</span>
                          <h3 className='font-bold'>{message.message}</h3>
                      <h3 className='text-sm font-thin mt-0 text-right'>{message.time}</h3>
                        </div>
                      </div>
                        

                    )
                  })
                }
              </div>
              <form onSubmit={handleSubmit} className='gap-2 flex justify-center'>
                <input type="text" placeholder='Type your message..' 
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
                className='text-center px-2 py-3 outline-none border-2 rounded-md'/>
                <button type='submit' className='bg-blue-400 px-3 py-2 text-white rounded-md font-bold hover:bg-blue-600'>Send</button>
              </form>
            </div>
          </div>) : (<div className='w-screen h-screen gap-2 flex justify-center items-center'>
            <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='text-center px-2 py-3 outline-none border-2 rounded-md'
             />
            <button type='submit' onClick={() => !username == "" && setChatActive(true)} className='bg-blue-400 px-3 py-2 text-white rounded-md font-bold'>Start chat</button>
          </div>)
        }
      </div>
    </>
  )
}

export default App
