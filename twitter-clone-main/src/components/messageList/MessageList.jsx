import { useState, useEffect } from "react";
import MessageItem from "../messageItem";
import "./index.css";

const MessageList = () => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => setMessageList(posts));
  }, []);

  return (
    <div className="MessageList">
      {messageList.map((message) => (
        <MessageItem messageData={message} key={message.id} />
      ))}
    </div>
  );
};

export default MessageList;
