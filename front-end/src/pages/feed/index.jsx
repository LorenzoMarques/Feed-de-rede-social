import { useState } from "react";
import Modal from "../../components/modal";
import Post from "../../components/post";
import "./style.css";

const posts = [
  {
    name: "Dr.Harvey",
    createdAt: "12 de setembro de 2022 às 16h",
    category: "Post",
    text: "Exercitationem, quasi corporis. Dolorum numquam ipsammolestiae possimus est",
  },
];

const Feed = () => {
  const [modal, setModal] = useState(false);

  const showCloseModal = () => {
    setModal(!modal);
  };

  return (
    <div className="feed">
      <div className="create">
        <h3>Criar:</h3>
        <button onClick={showCloseModal}>Post</button>
        <button>Artigo</button>
        <button>Peça ou modelo</button>
      </div>

      {posts.map((post, i) => {
        return (
          <Post
            username={post.name}
            createdAt={post.createdAt}
            postCategory={post.category}
            postText={post.text}
            key={i}
          />
        );
      })}

      {modal && <Modal modal={modal} showCloseModal={showCloseModal} />}
    </div>
  );
};

export default Feed;
