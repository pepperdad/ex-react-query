import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  if (isLoading)
    return (
      <div style={{ background: "yellow", width: "100vw", height: "100vh" }}>
        로딩 중...
      </div>
    );

  return (
    <div>
      <h1>리스트 페이지</h1>
      <div>
        <Link href="/">
          <button>홈</button>
        </Link>
        <Link href="/without-rq/list">
          <button>목록</button>
        </Link>
      </div>

      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            onClick={() => navigate(`/without-rq/detail/${post.id}`)}
          >
            <h3>{post.website}</h3>
            <p>{post.phone}</p>
            <p>작성자: {post.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List2;
