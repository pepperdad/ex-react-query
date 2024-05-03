import { useNavigate, useParams } from "react-router-dom";
import { useDeletePost, useGetPost } from "../../hooks";
import "../../style/detail.css";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetPost(id);
  const { mutate } = useDeletePost(id);

  const handleDelete = () => {
    if (window.confirm("이 포스트를 삭제하시겠습니까?")) {
      mutate();
    }

    navigate("/with-rq/list");
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

export default Detail;
