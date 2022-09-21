import { useEffect, useState } from "react";
import Modal from "../../components/modal";
import Post from "../../components/post";
import api from "../../services/api";
import "./style.css";
import InfiniteScroll from "../../components/infinityScroll";
import UpdateModal from "../../components/modalUpdatePost";

const Feed = () => {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPage, setNextPage] = useState("/posts?page=1");

  const showCloseModal = () => {
    setModal(!modal);
  };

  const refreshPage = () => {
    api.get("/posts").then((res) => {
      setPosts([...res.data.data]);
      setNextPage(res.data.next_page_url.split(`api`)[1]);
    });
  };

  const loadPage = () => {
    api
      .get(nextPage)
      .then((res) => {
        setPosts([...posts, ...res.data.data]);
        setNextPage(res.data.next_page_url.split(`api`)[1]);
      })
      .then((res) => setLoading(false));
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <div className="feed">
      <div className="create">
        <h3>Criar:</h3>
        <button onClick={showCloseModal}>Post</button>
        <button>Artigo</button>
        <button>Peça ou modelo</button>
      </div>

      {posts.map((post) => {
        return (
          <Post
            username={post.username}
            createdAt={post.created_at}
            postCategory={post.category}
            postText={post.text}
            key={post.id}
            img={post.image_url}
            id={post.id}
            refreshPage={refreshPage}
          />
        );
      })}

      {modal && (
        <Modal
          modal={modal}
          showCloseModal={showCloseModal}
          setNextPage={setNextPage}
          setPosts={setPosts}
          posts={posts}
          refreshPage={refreshPage}
        />
      )}

      <InfiniteScroll fetchMore={() => setLoading(true)} />
      {loading && <InfiniteScroll fetchMore={loadPage} />}
    </div>
  );
};

export default Feed;
