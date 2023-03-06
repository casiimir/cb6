import messageList from "../../mock/messageList";
import MessageItem from "../messageItem";
import "./index.css";

const MessageList = () => {
  return (
    <div className="MessageList">
      {messageList.map((message) => (
        <MessageItem messageData={message} />
      ))}
    </div>
  );
};

export default MessageList;
