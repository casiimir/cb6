import { useState } from "react";
import "./index.css";

const Modal = ({ setModalVisibility }) => {
  const [titleInput, setTitleInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [userIdInput, setUserIdInput] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleInput,
        message: messageInput,
        userId: userIdInput,
      }),
    });

    setModalVisibility(false);
  };

  const onHandleClick = () => {
    setModalVisibility(false);
  };

  return (
    <div className="Modal">
      <div className="Modal__overlay" onClick={onHandleClick}></div>
      <div className="Modal__content">
        <h3>Add a new post</h3>
        <button onClick={onHandleClick} className="close-modal">
          X
        </button>
        <form onSubmit={onHandleSubmit} className="Modal__content--form">
          <input
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            type="text"
            placeholder="Title ..."
            required
          />
          <input
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            type="text"
            placeholder="Message ..."
            required
          />

          <input
            value={userIdInput}
            onChange={(e) => setUserIdInput(e.target.value)}
            type="number"
            placeholder="UserId ..."
            required
          />
          <input
            className="Modal__content--form-submit"
            type="submit"
            value="Add new post"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
