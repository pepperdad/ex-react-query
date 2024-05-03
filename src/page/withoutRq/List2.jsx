import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllPostData } from "../../api";
import "../../style/list.css";

const List2 = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await getAllPostData();

        setPosts(response);
      } catch (error) {
        console.error("Fetching error: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>리스트 페이지</h1>
      <div>
        <button onClick={() => navigate(`/`)}>홈</button>
        <button onClick={() => navigate(`/without-rq/list`)}>목록</button>
        <button onClick={() => navigate(`/with-rq/post`)}>글쓰기</button>
      </div>

      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => navigate(`/without-rq/detail/${post.id}`)}
          >
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>작성자: {post.writer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List2;
