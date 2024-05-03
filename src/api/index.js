const API_URL = `${import.meta.env.VITE_BASE_URL}`;

export const getAllPostData = async () => {
  const data = await fetch(`${API_URL}/api/post`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
};

export const getPostData = async (postId) => {
  const data = await fetch(`${API_URL}/api/post/${postId}`, {
    method: "GET",
  }).then((res) => res.json());

  return data;
};

export const createPost = async (postData) => {
  const response = await fetch(`${API_URL}/api/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return response.json();
};

export const deletePost = async (postId) => {
  const response = await fetch(`${API_URL}/api/post/${postId}`, {
    method: "DELETE",
  });

  return response.json();
};
