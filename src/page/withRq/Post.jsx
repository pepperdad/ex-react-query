import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../../hooks";
import "../../style/post.css";

const Post = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");
  const { mutate } = useCreatePost();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      writer,
    };

    mutate(postData);

    navigate("/with-rq/list");
  };

  return (
    <>
      <h1>글 작성 페이지</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="작성자"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        />
        <button type="submit">글 작성</button>
      </form>
    </>
  );
};

export default Post;
