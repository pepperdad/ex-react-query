import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import List from "./page/withRq/List";
import List2 from "./page/withoutRq/List2";

const Router = () => {
  const routerData = [
    { path: "/", element: <Home /> },
    { path: "/with-rq/list", element: <List /> },
    { path: "/without-rq/list", element: <List2 /> },
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
