import "./index.css";

const MenuContent = () => {
  return (
    <ul>
      <li>
        <img
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
      </li>
      <li>
        <img
          src="https://img.icons8.com/pulsar-line/256/home-page.png"
          alt="home"
        />
        <p>Home</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material-rounded/256/hashtag-large.png"
          alt="explore"
        />
        <p>Explore</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material/256/jingle-bell.png"
          alt="notifications"
        />
        <p>Notifications</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/ios-glyphs/256/filled-chat.png"
          alt="messages"
        />
        <p>Messages</p>
      </li>
      <li>
        <img
          src="https://img.icons8.com/material/256/bookmark-outline.png"
          alt="bookmarks"
        />
        <p>Bookmarks</p>
      </li>
    </ul>
  );
};

export default MenuContent;
