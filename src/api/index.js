export const getAllPostData = async () => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "GET",
  }).then((res) => res.json());

  // console.log(data);
  return data;
};
