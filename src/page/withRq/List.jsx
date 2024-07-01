import { Link, useNavigate } from "react-router-dom";
import { useGetAllPost } from "../../hooks";
import "../../style/list.css";

const List = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllPost();

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
        <Link href="/with-rq/list">
          <button>목록</button>
        </Link>
      </div>

      <ul>
        {data?.map((data) => (
          <li
            key={data.id}
            onClick={() => navigate(`/with-rq/detail/${data.id}`)}
          >
            <h3>{data.website}</h3>
            <p>{data.phone}</p>
            <p>작성자: {data.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
