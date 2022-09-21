import { useState } from "react";
import user from "../../assets/avatar_default.png";
import "./style.css";
import { HiDotsVertical } from "react-icons/hi";
import api from "../../services/api";
import UpdateModal from "../modalUpdatePost";

const Post = ({
  username,
  createdAt,
  postCategory,
  postText,
  img,
  id,
  refreshPage,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [updateDelete, setUpdateDelete] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const date = new Date(createdAt).toLocaleDateString("fr");
  const hDate =
    new Date(createdAt).toString().split(" ")[4].split(":")[0] +
    ":" +
    new Date(createdAt).toString().split(" ")[4].split(":")[1];

  const deletePost = () => {
    api.delete(`/posts/${id}`).then(() => {
      refreshPage();
    });
  };

  return (
    <div className="post">
      <div className="dots-button">
        <button onClick={() => setUpdateDelete(!updateDelete)}>
          <HiDotsVertical size={25} />
        </button>

        {updateDelete && (
          <div className="update-delete-container">
            <button
              onClick={() => {
                setShowUpdateModal(true);
                setUpdateDelete(false);
              }}
            >
              Update
            </button>
            <button onClick={deletePost}>Delete</button>
          </div>
        )}
      </div>

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

      {showUpdateModal && (
        <UpdateModal
          id={id}
          refreshPage={refreshPage}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
    </div>
  );
};

export default Post;
