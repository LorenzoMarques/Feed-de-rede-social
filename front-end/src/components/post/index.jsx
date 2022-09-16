import { useEffect } from "react";
import { useState } from "react";
import user from "../../assets/avatar_default.png";
import "./style.css";
import imagem from "../../assets/feed_detail.png";

const Post = ({ username, createdAt, postCategory, postText, img }) => {
  const [overflow, setOverflow] = useState(false);
  const [postHeight, setPostHeight] = useState();

  useEffect(() => {
    const element = window.document.getElementsByClassName("post-text");

    setPostHeight(element[0].clientHeight);
    console.log(element[0].clientHeight);
  }, []);

  const style = overflow ? { maxHeight: "unset" } : { maxHeight: "250px" };

  return (
    <div className="post">
      <div className="user">
        <img src={user} alt="" />
        <div className="username-created-at">
          <h2>{username}</h2>
          <span>Puclicado em {createdAt}</span>
        </div>
      </div>

      <div className="post-text" style={style}>
        <h3>{postCategory}</h3>
        <p>{postText}</p>
      </div>
      {postHeight >= 250 && (
        <>
          {!overflow ? (
            <button
              className="read-or-hide-button"
              onClick={() => setOverflow(true)}
            >
              Leia mais...
            </button>
          ) : (
            <button
              className="read-or-hide-button"
              onClick={() => setOverflow(false)}
            >
              Esconder
            </button>
          )}
        </>
      )}

      <div className="image-container">
        <img src={imagem} alt="" />
      </div>
    </div>
  );
};

export default Post;
