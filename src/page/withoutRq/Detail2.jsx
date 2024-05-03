import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, getPostData } from "../../api";
import "../../style/detail.css";

const Detail2 = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const response = await getPostData(id);
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("이 포스트를 삭제하시겠습니까?")) {
      try {
        const response = await deletePost(id);

        console.log(response);

        navigate("/with-rq/list");
      } catch (error) {
        console.error(error);
      }
    }
  };

  if (isLoading) return <div className="loading-screen">로딩 중...</div>;

  return (
    <>
      <h1>상세 페이지</h1>

      <div className="detail-container">
        <h1>{data.title}</h1>
        <p>{data.content}</p>
        <p>작성자: {data.writer}</p>
      </div>

      <button className="delete-button" onClick={handleDelete}>
        삭제
      </button>
    </>
  );
};

export default Detail2;
