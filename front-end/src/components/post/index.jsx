import { useState } from "react";
import user from "../../assets/avatar_default.png";
import "./style.css";
import imagem from "../../assets/feed_detail.png";

const Post = ({ username, createdAt, postCategory, postText, img }) => {
  const [showMore, setShowMore] = useState(false);
  console.log(postText.length);

  const date = new Date(createdAt).toLocaleDateString("fr");
  const hDate =
    new Date(createdAt).toString().split(" ")[4].split(":")[0] +
    ":" +
    new Date(createdAt).toString().split(" ")[4].split(":")[1];
  return (
    <div className="post">
      <div className="user">
        <img src={user} alt="" />
        <div className="username-created-at">
          <h2>{username}</h2>
          <span>
            Puclicado em {date} às {hDate}
          </span>
        </div>
      </div>

      <div className="post-text">
        <h3>{postCategory}</h3>
        {postText.length > 250 ? (
          <p>
            {showMore ? postText : `${postText.substring(0, 250)}`}
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
            </button>{" "}
          </p>
        ) : (
          <p>{postText}</p>
        )}
      </div>

      <div className="image-container">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Post;
