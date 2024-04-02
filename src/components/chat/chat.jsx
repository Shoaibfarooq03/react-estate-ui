
import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chats">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shoaib Farooq</span>
          <p>My Profile </p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Younus Ali</span>
          <p>I am Having Dinner Right now</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Asad Ali</span>
          <p>Ok see you</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Mehran Khan</span>
          <p>Yes Sure</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Shahid Khan</span>
          <p>see you after 9PM</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Areeb Umair</span>
          <p>OK Bye</p>
        </div>
      </div>
      {chat && (
        <div className="chatBoxes">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              Moiz Ahmad
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="mid">
            <div className="chatMessage">
              <p>How are you </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>I am Good, What about You?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>I am good, Lets play cricket today</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>yes Sure see your after an hour</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Ok</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Bye bye</p>
              <span>1 hour ago</span>
            </div>
            
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
