import { useNavigate } from "react-router-dom";
import "../../style/list.css";

const List = () => {
  const navigate = useNavigate();

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>리스트 페이지</h1>
      <div>
        <button onClick={() => navigate(`/`)}>홈</button>
        <button onClick={() => navigate(`/with-rq/list`)}>목록</button>
        <button onClick={() => navigate(`/with-rq/post`)}>글쓰기</button>
      </div>

      <ul>
        {data?.map((data) => (
          <li
            key={data.id}
            onClick={() => navigate(`/with-rq/detail/${data.id}`)}
          >
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <p>작성자: {data.writer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
