import { useState, useEffect } from "react";
import "./index.css";

const MessageItem = ({ messageData }) => {
  const { userId, body } = messageData;

  const [userData, setUserData] = useState({});
  const [nLikes, setNLikes] = useState(0);

  // useEffect(() => {
  //   fetch(`https://dummyjson.com/users/${userId}`)
  //     .then((res) => res.json())
  //     .then((data) => setUserData(data));
  // }, []);

  const onMessageLike = () => setNLikes((prev) => prev + 1);

  return (
    <div className="MessageItem">
      <img
        className="MessageItem__photo"
        src={userData.image}
        alt={userData.username}
      />
      <div className="MessageItem__content">
        <span>{userData.username}</span>
        <span> {userData.email}</span>
        <p>{body}</p>
        <div className="MessageItem__content--icons">
          <img
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
          <img
            src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
            alt="arrow"
          />
          <div>
            <p>{nLikes}</p>
            <img
              onClick={onMessageLike}
              src="https://img.icons8.com/ios-glyphs/256/hearts.png"
              alt="heart"
            />
          </div>
          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
