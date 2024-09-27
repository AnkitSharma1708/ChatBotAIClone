import { useState } from 'react'
import logo from './assets/assets/chatgpt.svg';
import addbtn from './assets/assets/add-30.png';
import msgicon from './assets/assets/message.svg';
import home from './assets/assets/home.svg';
import save from './assets/assets/bookmark.svg';
import upgrade from './assets/assets/rocket.svg';
import sendBtn from './assets/assets/send.svg';
import userIcon from './assets/assets/user-icon.png';
import gptLogonIcon from './assets/assets/chatgptLogo.svg';
import './App.css'
import { sendMsgToOpenAI } from './openai';



function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([{
    text: "HI I'm Bot",
    isBot : true,
  }]);

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    setMessage([
      ...message,
      {text: input, isBot: flase},
      {text: res, isBot: true}
    ])
  }

  return (
    <>
      <div className="App">
        <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop"><img src={logo} alt="" className='logo' /><span className='brand'>ChatGPT</span></div>
            <button className='midbtn' ><img src={addbtn} alt="" className='addbtn'/><span>New Chat</span></button>
            <div className="upperSideBottom">
             <button className='query'><img src={msgicon} alt="" />What is Programming</button>
             <button className='query'><img src={msgicon} alt="" />What is API</button>
            </div>
          </div>
          <div className="lowerSide">
             <div className="listItems"><img src={home} alt="" className="listItemImg" />Home</div>
             <div className="listItems"><img src={save} alt="" className="listItemImg" />Saved</div>
             <div className="listItems"><img src={upgrade} alt="" className="listItemImg" />Upgrade to Premium</div>
          </div>
        </div>
        <div className="mainBar">
          <div className="chatBox">
            <div className="chat">
              <img className='chatImg' src={userIcon} alt="" /><p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, assumenda.</p>
            </div>
            <div className="chat bot">
              <img className='chatImg' src={gptLogonIcon} alt="" /><p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, assumenda.</p>
            </div>
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder='Ask a Query' value={input} onChange={(e)=>{setInput(e.target.value)}}/> <button className='send' onClick={handleSend}><img src={sendBtn} alt="" /></button>
            </div>
            <p>ChatGPT can make mistakes. Check important info.</p>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default App
