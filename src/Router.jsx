import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./page/withRq/List";
import Detail from "./page/withRq/Detail";
import Post from "./page/withRq/Post";
import List2 from "./page/withoutRq/List2";
import Home from "./Home";
import Detail2 from "./page/withoutRq/Detail2";

const Router = () => {
  const routerData = [
    { path: "/", element: <Home /> },
    { path: "/with-rq/list", element: <List /> },
    { path: "/without-rq/list", element: <List2 /> },
    { path: "/with-rq/post", element: <Post /> },
    { path: "/with-rq/detail/:id", element: <Detail /> },
    { path: "/without-rq/detail/:id", element: <Detail2 /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routerData.map((data, i) => (
          <Route key={`route-${i}`} path={data.path} element={data.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
